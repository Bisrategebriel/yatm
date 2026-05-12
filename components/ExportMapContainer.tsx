"use client";

import dynamic from "next/dynamic";

const ExportMap = dynamic(() => import("./ExportMap"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl bg-[#0D2137] border border-white/10 aspect-[800/500] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-white/10 border-t-[#00875A] rounded-full animate-spin" />
        <span className="text-white/30 text-xs font-display tracking-widest uppercase">Loading Trade Map...</span>
      </div>
    </div>
  ),
});

export default function ExportMapContainer() {
  return <ExportMap />;
}
