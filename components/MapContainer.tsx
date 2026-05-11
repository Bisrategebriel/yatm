"use client";

import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("./WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl bg-[#091E42] border border-white/10 aspect-[900/560] flex items-center justify-center">

      <span className="text-white/30 text-sm">Loading map…</span>
    </div>
  ),
});

export default function MapContainer() {
  return <WorldMap />;
}
