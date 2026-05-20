"use client";

import { motion } from "framer-motion";
import { Rocket, BookOpen, Zap, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Startup Support",
    desc: "From ideation to launch — we help startups build their MVP, establish brand identity, and enter the market with confidence. Get expert mentorship and technical execution under one roof.",
    points: ["MVP Development", "Business Registration Guidance", "Pitch Deck & Investor Materials", "Go-to-Market Strategy"],
  },
  {
    icon: <BookOpen className="w-8 h-8 text-secondary" />,
    title: "Business Planning",
    desc: "A solid plan is the foundation of every successful business. We work with you to create detailed business plans, financial projections, and operational roadmaps.",
    points: ["Business Model Design", "Financial Projections", "Market Research & Analysis", "Operational Roadmap"],
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Digital Transformation",
    desc: "Modernize your business with cutting-edge digital tools. We help traditional businesses migrate to the digital world seamlessly with minimum disruption.",
    points: ["Legacy System Migration", "Cloud Integration", "Process Automation", "Digital Workflow Design"],
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Revenue Growth Strategy",
    desc: "Data-driven strategies to increase your revenue, acquire new customers, and retain existing ones through smart marketing and product optimization.",
    points: ["SEO & Content Marketing", "Conversion Rate Optimization", "Email Marketing Funnels", "Retention & Loyalty Programs"],
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Business <span className="text-gradient">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Comprehensive end-to-end solutions to launch, scale, and transform your business in the digital era.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-card-border hover:border-primary/50 transition-colors"
            >
              <div className="mb-5 p-4 rounded-2xl bg-background inline-block shadow-sm">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-foreground/70 leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center glass-card p-12 rounded-3xl border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-foreground/70 mb-6">Let our experts craft a custom solution tailored to your specific needs and goals.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_20px_var(--primary-glow)]">
            Talk to an Expert <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
