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

const origin = {
  name: "Addis Ababa",
  label: "Ethiopia (Origin)",
  coordinates: [38.74, 9.01] as [number, number],
};

const destinations = [
  { name: "USA", label: "North America", coordinates: [-77.03, 38.90] as [number, number] },
  { name: "UK", label: "United Kingdom", coordinates: [-0.12, 51.50] as [number, number] },
  { name: "Germany", label: "European Union", coordinates: [13.40, 52.52] as [number, number] },
  { name: "UAE", label: "UAE & GCC", coordinates: [55.27, 25.20] as [number, number] },
  { name: "China", label: "China & HK", coordinates: [116.40, 39.90] as [number, number] },
  { name: "Japan", label: "Southeast Asia", coordinates: [139.69, 35.68] as [number, number] },
  { name: "South Africa", label: "Sub-Saharan Africa", coordinates: [28.04, -26.20] as [number, number] },
  { name: "Brazil", label: "Latin America", coordinates: [-47.88, -15.79] as [number, number] },
];

export default function ExportMap() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="rounded-xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(0,135,90,0.15)]"
      style={{ background: "#0D2137" }}
    >
      <style>{`
        @keyframes pulse-export {
          0%   { r: 4;  opacity: 0.8; }
          100% { r: 14; opacity: 0;   }
        }
        .marker-pulse { animation: pulse-export 2s ease-out infinite; }
        @keyframes dash-move {
          to { stroke-dashoffset: -20; }
        }
        .export-route { animation: dash-move 2s linear infinite; }
      `}</style>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [20, 15], scale: 160 }}
        width={800}
        height={500}
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <rect x={0} y={0} width={800} height={500} fill="#0D2137" />

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1a3a5c"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth={0.5}
                style={{
                  default: { fill: "#1a3a5c", outline: "none" },
                  hover:   { fill: "#1e4a6e", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Routes from Ethiopia */}
        {destinations.map((dest, i) => (
          <Line
            key={i}
            from={origin.coordinates}
            to={dest.coordinates}
            stroke="#00C7E6"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeDasharray="5 4"
            className="export-route"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}

        {/* Origin Marker */}
        <Marker coordinates={origin.coordinates}>
          <circle r={6} fill="#00875A" />
          <circle r={6} fill="#00875A" className="marker-pulse" />
          <text
            textAnchor="middle"
            y={-12}
            style={{ fontSize: "10px", fill: "#FFFFFF", fontWeight: "bold", paintOrder: "stroke", stroke: "#0D2137", strokeWidth: "3px" }}
          >
            {origin.name}
          </text>
        </Marker>

        {/* Destination Markers */}
        {destinations.map((dest) => (
          <Marker key={dest.name} coordinates={dest.coordinates}>
            <circle r={4} fill="#4C9AFF" />
            <text
              textAnchor="middle"
              y={-10}
              style={{ fontSize: "8px", fill: "rgba(255,255,255,0.7)", fontWeight: "600", paintOrder: "stroke", stroke: "#0D2137", strokeWidth: "2.5px" }}
            >
              {dest.label}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      <div className="flex items-center gap-4 px-4 py-3 border-t border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00875A]" />
          <span className="text-white/60 text-[10px] font-medium font-display">Export Hub (Addis Ababa)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#4C9AFF]" />
          <span className="text-white/60 text-[10px] font-medium font-display">Primary Market</span>
        </div>
      </div>
    </div>
  );
}
