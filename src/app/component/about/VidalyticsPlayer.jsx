"use client";

import { useEffect } from "react";

export default function VidalyticsPlayer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://quick.vidalytics.com/embeds/IgKBDqAD/ts4P85AQNtam39oG/loader.min.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.Vidalytics?.Embed) {
        new window.Vidalytics.Embed().run("vidalytics_embed_ts4P85AQNtam39oG");
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-10 rounded-xl overflow-hidden shadow-lg">
      <div
        id="vidalytics_embed_ts4P85AQNtam39oG"
        className="relative w-full h-102"
      ></div>
    </div>
  );
}
