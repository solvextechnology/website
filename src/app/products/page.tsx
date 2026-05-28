"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Rocket, Gamepad2, CheckCircle2, ShieldCheck, Trash2, ArrowRight, Zap, Target, BookOpen, Mic, Trophy } from "lucide-react";

const products = [
  {
    title: "To Do It",
    category: "Productivity & Gamification",
    desc: "A gamified productivity and task management suite. Plan your tasks, run deep-focus Pomodoro sessions, maintain local financial ledger books, and earn virtual loyalty streaks for staying on track.",
    link: "/products/todoit",
    image: "/images/todoit-logo.png",
    status: "Active Info",
    features: [
      { name: "Task Scheduler", icon: <Target className="w-4 h-4 text-primary" /> },
      { name: "Voice task entry", icon: <Mic className="w-4 h-4 text-accent" /> },
      { name: "Pomodoro Focus", icon: <Zap className="w-4 h-4 text-yellow-500" /> },
      { name: "Personal Ledger", icon: <BookOpen className="w-4 h-4 text-emerald-500" /> },
      { name: "Gamified Streaks", icon: <Trophy className="w-4 h-4 text-secondary" /> }
    ],
    statusStyle: "border-emerald-500/50 text-emerald-400 bg-emerald-500/10",
    statusDot: "bg-emerald-400 animate-pulse",
    icon: <Rocket className="w-5 h-5 text-primary" />
  },
  {
    title: "Next-Gen Mobile Game",
    category: "Gaming & Economy",
    desc: "An immersive, multiplayer arcade adventure. Currently in active development, this game features stunning visuals, high-octane mechanics, and a vibrant community-driven progression system.",
    link: "",
    image: "/images/product_game.png",
    status: "In Development",
    features: [
      { name: "Real-time Arcade", icon: <Gamepad2 className="w-4 h-4 text-secondary" /> },
      { name: "Stunning 3D Assets", icon: <Zap className="w-4 h-4 text-yellow-500" /> },
      { name: "Dynamic Progression", icon: <Trophy className="w-4 h-4 text-accent" /> }
    ],
    statusStyle: "border-yellow-500/50 text-yellow-400 bg-yellow-500/10",
    statusDot: "bg-yellow-400",
    icon: <Gamepad2 className="w-5 h-5 text-secondary" />
  }
];

export default function Products() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background relative overflow-hidden">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/10 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-sm text-primary font-bold uppercase tracking-wider mb-6"
          >
            <Rocket className="w-4 h-4" /> Innovation Hub
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          >
            Flagship <span className="text-gradient">Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our premium, in-house applications designed to empower your daily workflows, reward your focus, and elevate your digital experiences.
          </motion.p>
        </div>

        {/* Product Showcase Cards */}
        <div className="space-y-20">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass-card rounded-[32px] overflow-hidden border border-card-border p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row gap-12 lg:items-center hover:border-primary/45 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-500 relative group"
            >
              
              {/* Product Card Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Product Image Panel */}
              <div className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-card-border bg-card/30 flex items-center justify-center">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-700 p-4 md:p-6"
                  priority={i === 0}
                />
                
                {/* Floating Status Badge */}
                <div className="absolute top-6 left-6">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border backdrop-blur-md ${product.statusStyle}`}>
                    <span className={`w-2.5 h-2.5 rounded-full ${product.statusDot}`}></span>
                    {product.status}
                  </span>
                </div>
              </div>

              {/* Product Details Panel */}
              <div className="flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-card border border-card-border text-xs font-bold text-foreground/80 uppercase tracking-widest mb-6">
                    {product.icon} {product.category}
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h2>
                  
                  <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                    {product.desc}
                  </p>

                  {/* Feature Pill Grid */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50">Core Engine Modules</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {product.features.map((feat, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-card border border-card-border/80 text-sm font-medium hover:border-primary/30 transition-colors"
                        >
                          {feat.icon}
                          <span>{feat.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Actions Button */}
                <div className="pt-8 border-t border-card-border/60">
                  {product.link ? (
                    <Link
                      href={product.link}
                      className="inline-flex items-center gap-2 px-8 py-4.5 bg-primary text-white rounded-2xl font-bold hover:bg-primary/95 transition-all shadow-[0_8px_30px_var(--primary-glow)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.5)] hover:scale-[1.02] group-hover:translate-x-1"
                    >
                      Explore To Do It Suite <ArrowRight className="w-5 h-5" />
                    </Link>
                  ) : (
                    <button 
                      disabled
                      className="inline-flex items-center gap-2 px-8 py-4.5 bg-card text-foreground/40 rounded-2xl font-bold border border-card-border cursor-not-allowed"
                    >
                      Under Active Development
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
