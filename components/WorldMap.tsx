"use client";

import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const GEO_URL = "/countries-110m.json";

const cities = [
  {
    name: "Addis Ababa",
    label: "Addis Ababa",
    coordinates: [38.7, 9.0] as [number, number],
    hub: true,
    anchor: "middle" as const,
    dy: -10,
  },
  {
    name: "Djibouti",
    label: "Djibouti",
    coordinates: [43.1, 11.6] as [number, number],
    hub: false,
    anchor: "start" as const,
    dy: -8,
  },
  {
    name: "Dubai",
    label: "Dubai",
    coordinates: [55.3, 25.2] as [number, number],
    hub: true,
    anchor: "middle" as const,
    dy: -10,
  },
  {
    name: "Saudi Arabia",
    label: "Saudi Arabia",
    coordinates: [46.7, 24.7] as [number, number],
    hub: false,
    anchor: "end" as const,
    dy: -8,
  },
  {
    name: "Yemen",
    label: "Yemen",
    coordinates: [44.2, 15.4] as [number, number],
    hub: false,
    anchor: "end" as const,
    dy: -8,
  },
  {
    name: "Sudan",
    label: "Sudan",
    coordinates: [32.5, 15.6] as [number, number],
    hub: false,
    anchor: "end" as const,
    dy: -8,
  },
  {
    name: "China",
    label: "China (Xi'an)",
    coordinates: [108.9, 34.3] as [number, number],
    hub: true,
    anchor: "middle" as const,
    dy: -10,
  },
];

// Trade routes between city pairs
const routes: [[number, number], [number, number]][] = [
  [[38.7, 9.0], [43.1, 11.6]],   // Addis ↔ Djibouti
  [[43.1, 11.6], [55.3, 25.2]],  // Djibouti ↔ Dubai
  [[38.7, 9.0], [32.5, 15.6]],   // Addis ↔ Sudan
  [[55.3, 25.2], [46.7, 24.7]],  // Dubai ↔ Saudi Arabia
  [[46.7, 24.7], [44.2, 15.4]],  // Saudi Arabia ↔ Yemen
  [[44.2, 15.4], [43.1, 11.6]],  // Yemen ↔ Djibouti
  [[55.3, 25.2], [108.9, 34.3]], // Dubai ↔ China
];

export default function WorldMap() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="rounded-xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(0,82,204,0.2)]"
      style={{ background: "#0D2137" }}
    >
      <style>{`
        @keyframes pulse-ring {
          0%   { r: 5;  opacity: 0.8; }
          100% { r: 16; opacity: 0;   }
        }
        @keyframes pulse-ring-sm {
          0%   { r: 4;  opacity: 0.8; }
          100% { r: 12; opacity: 0;   }
        }
        .hub-pulse   { animation: pulse-ring    2s ease-out infinite; }
        .peer-pulse  { animation: pulse-ring-sm 2s ease-out infinite; }
        .hub-pulse-2 { animation: pulse-ring    2s ease-out 0.3s infinite; }
        .peer-pulse-2{ animation: pulse-ring-sm 2s ease-out 0.6s infinite; }
        .hub-pulse-3 { animation: pulse-ring    2s ease-out 0.9s infinite; }
        .peer-pulse-3{ animation: pulse-ring-sm 2s ease-out 1.2s infinite; }
        .peer-pulse-4{ animation: pulse-ring-sm 2s ease-out 1.5s infinite; }
        @keyframes dash-anim {
          to { stroke-dashoffset: -24; }
        }
        .trade-route { animation: dash-anim 1.8s linear infinite; }
      `}</style>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [65, 20], scale: 550 }}
        width={900}
        height={560}
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* Ocean fill */}
        <rect x={0} y={0} width={900} height={560} fill="#0D2137" />

        {/* Grid lines */}
        {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((x) => (
          <line key={`v${x}`} x1={x} y1={0} x2={x} y2={560} stroke="rgba(255,255,255,0.03)" strokeWidth={1} />
        ))}
        {[0, 80, 160, 240, 320, 400, 480, 560].map((y) => (
          <line key={`h${y}`} x1={0} y1={y} x2={900} y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth={1} />
        ))}


        {/* Country fills */}
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1a3a5c"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth={0.5}
                style={{
                  default: { fill: "#1a3a5c", outline: "none" },
                  hover:   { fill: "#1e4a6e", outline: "none" },
                  pressed: { fill: "#1a3a5c", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Trade route lines */}
        {routes.map(([from, to], i) => (
          <Line
            key={i}
            from={from}
            to={to}
            stroke="#00C7E6"
            strokeWidth={1}
            strokeLinecap="round"
            strokeDasharray="6 5"
            strokeOpacity={0.45}
            className="trade-route"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}

        {/* City markers */}
        {cities.map((city, i) => {
          const pulseClass = city.hub
            ? [`hub-pulse`, `hub-pulse-2`, `hub-pulse-3`][i % 3]
            : [`peer-pulse`, `peer-pulse-2`, `peer-pulse-3`, `peer-pulse-4`][i % 4];
          const fillColor = city.hub ? "#00C7E6" : "#4C9AFF";
          const r = city.hub ? 5 : 4;

          return (
            <Marker key={city.name} coordinates={city.coordinates}>
              {/* Pulse ring */}
              <circle
                r={r}
                fill={fillColor}
                fillOpacity={0.2}
                stroke="none"
                className={pulseClass}
              />
              {/* Core dot */}
              <circle
                r={r}
                fill={fillColor}
                stroke="rgba(255,255,255,0.35)"
                strokeWidth={1}
              />
              {/* Label */}
              <text
                textAnchor={city.anchor}
                x={city.anchor === "start" ? r + 4 : city.anchor === "end" ? -(r + 4) : 0}
                y={city.dy}
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "8.5px",
                  fill: "rgba(255,255,255,0.88)",
                  fontWeight: "700",
                  letterSpacing: "0.02em",
                  paintOrder: "stroke",
                  stroke: "#0D2137",
                  strokeWidth: "3px",
                  strokeLinejoin: "round",
                }}
              >
                {city.label}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>

      {/* Legend */}
      <div className="flex items-center gap-6 px-5 pb-4 pt-1">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00C7E6]" />
          <span className="text-white/50 text-[10px] font-medium">YAT Hub</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4C9AFF]" />
          <span className="text-white/50 text-[10px] font-medium">Partner Office</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="20" height="8" viewBox="0 0 20 8">
            <line x1="0" y1="4" x2="20" y2="4" stroke="#00C7E6" strokeWidth="1.5" strokeDasharray="4 3" />
          </svg>
          <span className="text-white/50 text-[10px] font-medium">Trade Route</span>
        </div>
      </div>
    </div>
  );
}
