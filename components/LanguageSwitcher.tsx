"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";

export const languages = [
  { code: "en", label: "English" },
  { code: "zh-CN", label: "中文 (Chinese)" },
  { code: "ar", label: "العربية (Arabic)" },
  { code: "fr", label: "Français (French)" },
  { code: "es", label: "Español (Spanish)" },
];

export const handleLanguageChange = (langCode: string) => {
  if (langCode === "en") {
    // Clear cookies to restore original English
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${window.location.hostname}; path=/;`;
    window.location.reload();
    return;
  }

  // Set Google Translate cookies explicitly for the selected language
  document.cookie = `googtrans=/en/${langCode}; path=/`;
  document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.hostname}; path=/`;

  // Trigger translation without reload by interacting with Google's hidden select
  const select = document.querySelector("select.goog-te-combo") as HTMLSelectElement;
  if (select) {
    select.value = langCode;
    // Dispatch native events
    select.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
  } else {
    // Fallback if Google Translate hasn't loaded its select box yet
    window.location.reload();
  }
};

interface Props {
  scrolled: boolean;
}

export default function LanguageSwitcher({ scrolled }: Props) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 px-2.5 py-2 rounded-[4px] text-sm font-semibold transition-all ${
          scrolled
            ? "text-[#253858] hover:text-[#0052CC] hover:bg-[#F4F5F7]"
            : "text-white/90 hover:text-white hover:bg-white/10"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Change Language"
      >
        <Globe size={18} />
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className="absolute top-full right-0 mt-2 w-[180px] bg-white rounded-[8px] shadow-[0_16px_48px_rgba(9,30,66,0.2),0_0_1px_rgba(9,30,66,0.25)] border border-[#DFE1E6] overflow-hidden z-50"
          role="menu"
        >
          <div className="px-4 py-3 border-b border-[#EBECF0] bg-[#F4F5F7]">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-[#6B778C]">Language</p>
          </div>
          <div className="p-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  handleLanguageChange(lang.code);
                  setOpen(false);
                }}
                className="w-full text-left flex items-center px-3 py-2.5 rounded-[6px] hover:bg-[#F4F5F7] transition-colors group"
                role="menuitem"
              >
                <p className="text-sm font-medium text-[#172B4D] group-hover:text-[#0052CC] transition-colors">
                  {lang.label}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
