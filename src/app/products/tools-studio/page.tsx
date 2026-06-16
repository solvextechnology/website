"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Rocket, ShieldCheck, Zap, BookOpen, Star, Video, PlayCircle } from "lucide-react";

export default function ToolsStudio() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/10 via-background to-background relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button */}
        <Link href="/products" className="inline-flex items-center gap-2 text-foreground/60 hover:text-red-500 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-sm text-red-500 font-bold uppercase tracking-wider mb-6"
          >
            <Video className="w-4 h-4" /> Creator Tool
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Tools <span className="text-red-500">Studio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 leading-relaxed"
          >
            The all-in-one AI-powered utility for YouTube creators to generate viral metadata, optimize SEO, and accelerate channel growth natively and offline.
          </motion.p>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold mb-8 text-center">6 AI-Powered Creator Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Rocket, title: "Title Generator", desc: "Craft high-CTR, click-worthy titles optimized for the YouTube algorithm." },
              { icon: Zap, title: "Shorts Hook", desc: "Generate 3-second hooks that retain viewers instantly for YouTube Shorts." },
              { icon: BookOpen, title: "SEO Description", desc: "Write comprehensive, keyword-rich descriptions to rank higher in search." },
              { icon: Star, title: "Hashtag Pack", desc: "Extract and generate trending hashtag clusters for maximum reach." },
              { icon: Video, title: "Shorts Script", desc: "Write engaging 60-second scripts structured for fast-paced retention." },
              { icon: ShieldCheck, title: "Tag Optimizer", desc: "Generate SEO metadata tags to help YouTube categorize your video." }
            ].map((tool, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl border border-card-border hover:border-red-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <tool.icon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-extrabold mb-8 text-center mt-20">Complete Creator Workspace</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-3xl border border-card-border hover:border-red-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Offline-First Engine</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Your workflow shouldn't depend on a constant internet connection. Generate, save, and manage your metadata drafts seamlessly offline using our local device cache.
              </p>
              <ul className="list-disc pl-5 text-sm text-foreground/60 space-y-2">
                <li>Local SQLite Database Integration</li>
                <li>Offline Notes & Calendar Planners</li>
                <li>Saved Items & Project History</li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-card-border hover:border-red-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Templates</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Access a premium library of community-driven YouTube description templates. Download them natively, like your favorites, and reuse them across your videos.
              </p>
              <ul className="list-disc pl-5 text-sm text-foreground/60 space-y-2">
                <li>Cloud-synced with Supabase Backend</li>
                <li>Like & Download tracking</li>
                <li>Publish your own templates for the community</li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-card-border hover:border-red-500/30 transition-all duration-300 md:col-span-2">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced Thumbnail Maker</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Design high-conversion thumbnails directly inside the app, and export them natively to your device gallery.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-background/50 p-4 rounded-xl text-center"><p className="text-sm font-bold">Custom Text</p></div>
                <div className="bg-background/50 p-4 rounded-xl text-center"><p className="text-sm font-bold">Rich Stickers</p></div>
                <div className="bg-background/50 p-4 rounded-xl text-center"><p className="text-sm font-bold">Color Gradients</p></div>
                <div className="bg-background/50 p-4 rounded-xl text-center"><p className="text-sm font-bold">Image Backgrounds</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Economy Section */}
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent relative overflow-hidden mb-16">
          <div className="absolute -right-20 -top-20 opacity-5">
            <Star className="w-96 h-96" />
          </div>
          <h2 className="text-3xl font-extrabold mb-6">Token Economy</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl">
            We use a transparent Token Wallet system to power our premium features. Earn tokens easily and spend them to unlock powerful tools.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 border border-card-border">
              <PlayCircle className="w-6 h-6 text-yellow-500" />
              <div>
                <strong className="text-lg font-bold">Earn 10 Tokens</strong>
                <p className="text-sm text-foreground/60">Watch a short rewarded ad to instantly add 10 tokens to your wallet.</p>
              </div>
            </li>
            <li className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 border border-card-border">
              <BookOpen className="w-6 h-6 text-blue-500" />
              <div>
                <strong className="text-lg font-bold">Premium Templates (500 Tokens)</strong>
                <p className="text-sm text-foreground/60">Unlock full access to download premium community templates for 24 hours.</p>
              </div>
            </li>
            <li className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 border border-card-border">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              <div>
                <strong className="text-lg font-bold">Ad-Free Premium (10,000 Tokens)</strong>
                <p className="text-sm text-foreground/60">Remove all banners, interstitials, and gates for 1 full month.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 pt-8 border-t border-card-border/50">
          <Link href="/legal/tools-studio/privacy" className="text-sm text-foreground/60 hover:text-red-500 transition-colors">Privacy Policy</Link>
          <Link href="/legal/tools-studio/terms" className="text-sm text-foreground/60 hover:text-red-500 transition-colors">Terms & Conditions</Link>
          <Link href="/legal/tools-studio/community-guidelines" className="text-sm text-foreground/60 hover:text-red-500 transition-colors">Community Guidelines</Link>
          <Link href="/legal/tools-studio/delete-account" className="text-sm text-foreground/60 hover:text-red-500 transition-colors">Delete Account</Link>
        </div>

      </div>
    </div>
  );
}
