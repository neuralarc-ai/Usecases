"use client";

import { useEffect } from "react";

export default function FontLoader() {
  useEffect(() => {
    // Check if the link already exists
    const existingLink = document.querySelector(
      'link[href*="fonts.googleapis.com/css2?family=Sora"]'
    );

    if (!existingLink) {
      const link = document.createElement("link");
      link.href =
        "https://fonts.googleapis.com/css2?family=Fustat:wght@200..800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Manrope:wght@200..800&family=Sora:wght@100..800&display=swap";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, []);

  return null;
}




