"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Rocket, ShieldCheck, Zap, BookOpen, Star, Video, PlayCircle } from "lucide-react";

export default function YouTubeViralToolkit() {
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
            YouTube <span className="text-red-500">Viral Toolkit</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="glass-card p-8 rounded-3xl border border-card-border hover:border-red-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Gemini AI Integration</h3>
            <p className="text-foreground/70 leading-relaxed">
              Powered by Google Gemini AI, generate viral titles, compelling descriptions, targeted tags, and engaging shorts hooks instantly without ever leaving the app.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-card-border hover:border-red-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Offline-First Engine</h3>
            <p className="text-foreground/70 leading-relaxed">
              Your workflow shouldn't depend on a constant internet connection. Generate, save, and export your metadata drafts seamlessly offline.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-card-border hover:border-red-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Community Templates</h3>
            <p className="text-foreground/70 leading-relaxed">
              Access a premium library of community-driven YouTube description templates. Download them natively and reuse them across your videos.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-card-border hover:border-red-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Thumbnail Maker</h3>
            <p className="text-foreground/70 leading-relaxed">
              Design high-conversion thumbnails with customizable text, gradients, and shadows directly inside the app, and export them directly to your gallery.
            </p>
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
          <Link href="/legal/youtube-viral-toolkit/privacy" className="text-sm text-foreground/60 hover:text-red-500 transition-colors">Privacy Policy</Link>
          <Link href="/legal/youtube-viral-toolkit/terms" className="text-sm text-foreground/60 hover:text-red-500 transition-colors">Terms & Conditions</Link>
          <Link href="/legal/youtube-viral-toolkit/delete-account" className="text-sm text-foreground/60 hover:text-red-500 transition-colors">Delete Account</Link>
        </div>

      </div>
    </div>
  );
}
