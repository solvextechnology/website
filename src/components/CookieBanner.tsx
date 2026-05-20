"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-4xl mx-auto glass-card border border-card-border rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
        <div className="flex-1 text-sm text-foreground/80">
          🍪 We use cookies to enhance your experience on our website. By continuing to browse, you agree to our{" "}
          <Link href="/legal/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium border border-card-border rounded-full hover:bg-card transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-[0_0_10px_var(--primary-glow)]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
