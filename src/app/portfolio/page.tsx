"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "BTC Reward Platform",
    category: "Crypto & Blockchain",
    desc: "A fully automated Bitcoin reward distribution platform with real-time analytics and user dashboard.",
    tags: ["React", "Node.js", "Blockchain"],
    color: "from-yellow-500/20 to-orange-500/10",
  },
  {
    title: "E-Commerce Store",
    category: "Web Development",
    desc: "A high-converting e-commerce platform with custom payment gateway, inventory management, and mobile-first design.",
    tags: ["Next.js", "MongoDB", "Stripe"],
    color: "from-primary/20 to-secondary/10",
  },
  {
    title: "Business Management SaaS",
    category: "Software Solution",
    desc: "A comprehensive SaaS platform for managing teams, projects, invoices, and client relationships.",
    tags: ["React", "Firebase", "Node.js"],
    color: "from-secondary/20 to-accent/10",
  },
  {
    title: "Online Earning Platform",
    category: "Digital Platform",
    desc: "An affiliate and referral-based online earning platform with multi-tier commission and withdrawal system.",
    tags: ["Next.js", "PostgreSQL", "Redis"],
    color: "from-accent/20 to-primary/10",
  },
  {
    title: "Brand Identity — TechStartup",
    category: "Branding",
    desc: "Complete brand redesign including logo, color palette, typography, and social media kit for a growing tech startup.",
    tags: ["Branding", "Figma", "Design"],
    color: "from-pink-500/20 to-purple-500/10",
  },
  {
    title: "Mobile App — Delivery Service",
    category: "App Development",
    desc: "Cross-platform delivery tracking app with real-time GPS, push notifications, and driver management panel.",
    tags: ["React Native", "Maps API", "Firebase"],
    color: "from-green-500/20 to-teal-500/10",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            A showcase of innovative projects and digital solutions we have built for clients globally.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border border-card-border hover:border-primary/50 transition-colors group"
            >
              <div className={`h-36 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-xs font-bold uppercase tracking-widest text-foreground/60 bg-background/40 px-3 py-1 rounded-full">{project.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  View Project <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
