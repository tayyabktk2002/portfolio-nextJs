"use client"
import { useEffect } from "react";

declare global {
  interface Window {
    chtlConfig?: { chatbotId: string };
  }
}

export default function Chatling() {
  useEffect(() => {
    window.chtlConfig = { chatbotId: "9544284527" };

    const script = document.createElement("script");
    script.src = "https://chatling.ai/js/embed.js";
    script.async = true;
    script.id = "chtl-script";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
