"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const subject = encodeURIComponent("Newsletter subscription request");
    const body = encodeURIComponent(`Please add this email to the newsletter list: ${email}`);

    window.location.href = `mailto:support@solvextechnology.in?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-background border-b border-card-border">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="glass-card p-12 rounded-3xl border border-card-border relative overflow-hidden">
          <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[80px] -top-10 -left-10 pointer-events-none" />
          <div className="absolute w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -bottom-10 -right-10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Stay <span className="text-gradient">Ahead of the Curve</span>
            </h2>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest insights on digital growth, tech trends, and exclusive offers from Solvex Technology.
            </p>
            {submitted ? (
              <div className="py-4 px-6 rounded-2xl bg-primary/10 border border-primary/30 text-primary font-semibold">
                Thanks. Your email app has opened with the subscription request.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-3 rounded-full bg-background border border-card-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-[0_0_15px_var(--primary-glow)]"
                >
                  Subscribe <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
