"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechStartup India",
    review: "Solvex Technology built our entire SaaS platform from scratch. The quality of code, design, and communication was top-notch. Highly recommend!",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Priya Mehta",
    role: "Founder, E-Commerce Brand",
    review: "They redesigned our brand identity and built our online store. Sales increased by 40% within 3 months. Absolutely outstanding team!",
    rating: 5,
    avatar: "PM",
  },
  {
    name: "Ahmed Khan",
    role: "Director, Global Ventures",
    review: "The business consultancy and digital automation services transformed how we operate. We saved 20+ hours per week with their custom workflows.",
    rating: 5,
    avatar: "AK",
  },
  {
    name: "Sneha Patel",
    role: "Startup Co-Founder",
    review: "From idea to launch in just 6 weeks! Solvex helped us validate our concept and build an MVP that attracted our first 100 customers.",
    rating: 5,
    avatar: "SP",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-card border-y border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Real results. Real businesses. Real growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-foreground/60 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
