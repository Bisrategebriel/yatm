"use client";

import Script from "next/script";

export default function TranslateWidget() {
  return (
    <>
      <div id="google_translate_element" style={{ width: 0, height: 0, overflow: 'hidden', position: 'absolute', left: '-9999px' }} aria-hidden="true"></div>
      
      <Script id="google-translate-config" strategy="beforeInteractive">
        {`
          window.googleTranslateElementInit = function() {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: "en,zh-CN,ar,fr,es"
              },
              "google_translate_element"
            );
          };
        `}
      </Script>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
