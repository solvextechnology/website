"use client";

import { motion } from "framer-motion";
import { Paintbrush, Layers, Share2, RefreshCw, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Paintbrush className="w-8 h-8 text-primary" />,
    title: "Logo Design",
    desc: "Professional, memorable logos that visually represent your brand's identity, values, and personality — crafted to make a lasting first impression.",
  },
  {
    icon: <Layers className="w-8 h-8 text-secondary" />,
    title: "Brand Identity",
    desc: "A complete brand identity system including color palette, typography, business cards, letterheads, and brand guidelines document.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-accent" />,
    title: "Business Rebranding",
    desc: "Breathing new life into your existing brand. We revamp outdated visuals and messaging to realign with your current audience and market.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: "Social Media Branding",
    desc: "Consistent and eye-catching social media branding kits — profile pictures, cover photos, post templates, and story highlights.",
  },
];

export default function Branding() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Branding & <span className="text-gradient">Rebranding</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Give your business a powerful, premium identity that resonates with your target audience and stands out in a crowded marketplace.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-card-border hover:border-primary/50 transition-colors group"
            >
              <div className="mb-5 p-4 rounded-2xl bg-background inline-block shadow-sm group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Branding <span className="text-gradient">Process</span></h2>
          <div className="flex flex-col md:flex-row gap-0 relative">
            {["Discovery", "Strategy", "Design", "Delivery"].map((step, i) => (
              <div key={i} className="flex-1 text-center px-4 relative">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary text-primary font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg mb-1">{step}</h3>
                <p className="text-foreground/60 text-sm">
                  {["Understand your goals & audience", "Define brand voice & positioning", "Create visuals & identity kit", "Deliver all files & guidelines"][i]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center glass-card p-12 rounded-3xl border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Ready for a Premium Brand Identity?</h2>
          <p className="text-foreground/70 mb-6">Let&apos;s build a brand that people remember and trust.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_20px_var(--primary-glow)]">
            Start Your Brand Journey <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
