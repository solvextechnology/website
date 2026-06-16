"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/10 via-background to-background relative overflow-hidden">
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button */}
        <Link href="/products/youtube-viral-toolkit" className="inline-flex items-center gap-2 text-foreground/60 hover:text-red-500 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Product
        </Link>

        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-sm text-red-500 font-bold uppercase tracking-wider mb-6"
          >
            <ShieldCheck className="w-4 h-4" /> Legal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-foreground/60">Last updated: June 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-red max-w-none text-foreground/80 space-y-8">
          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Data Isolation & Local Storage</h2>
            <p>
              YouTube Viral Toolkit is designed with an <strong>Offline-First Architecture</strong>. All metadata configurations, custom notes, local calendar reminders, and thumbnail graphics you create inside the app are stored strictly on your local device using secure local storage mechanisms. We do not sync your personal drafts to our servers unless you explicitly share them to the Community Templates pool.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Account Authentication (Supabase)</h2>
            <p>
              When you sign in using Google Auth, your profile is securely managed by our Supabase backend. We only store your public Google profile information (Email, Name, Avatar) and a secure unique identifier. Your Token Wallet balance and Premium subscription status are securely managed on our servers using strict Row Level Security (RLS) policies, ensuring only you can access your wallet.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Google AdMob Disclosures</h2>
            <p>
              This application utilizes Google AdMob to display banner, interstitial, and rewarded video ads to free-tier users. Google AdMob may utilize anonymous advertising identifiers (Android AID) to personalize ads depending on your regional permissions. By using the app, you consent to Google AdMob's standard privacy policies.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Gemini AI Engine</h2>
            <p>
              When you use our generation tools (Title, Description, Tags, Shorts Hooks), the prompts you provide are securely processed by the Google Gemini AI API to return the generated content. No personally identifiable information is sent to the AI engine, only the context prompts you provide.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
