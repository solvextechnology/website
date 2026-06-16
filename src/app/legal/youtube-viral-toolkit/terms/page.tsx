"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function Terms() {
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
            <BookOpen className="w-4 h-4" /> Legal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          >
            Terms & Conditions
          </motion.h1>
          <p className="text-foreground/60">Last updated: June 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-red max-w-none text-foreground/80 space-y-8">
          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, and using the YouTube Viral Toolkit, you agree to comply with and be bound by these Terms and Conditions. Our generators serve as templates and creative assistance. Actual channel performance and viewership depend on YouTube's algorithmic recommendation matrices, which are outside our control. We do not guarantee "viral" success.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Token Economy & Usage</h2>
            <p>
              The application operates on an internal Token system. Tokens have no real-world monetary value and cannot be exchanged for fiat currency.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Earning Tokens:</strong> Users can earn 10 tokens by watching rewarded video advertisements.</li>
              <li><strong>Spending Tokens:</strong> Users can spend 500 tokens to unlock 24-hour access to the Premium Community Templates, or 10,000 tokens for a 1-month Ad-Free Premium experience.</li>
              <li>Token balances are tied to your authenticated account and are non-transferable.</li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Fair Use of AI & Community Guidelines</h2>
            <p>
              You agree to use the Gemini AI integration responsibly. You must not use our tools to generate hate speech, explicit content, or spam. When sharing templates to the Community pool, you grant us a non-exclusive, royalty-free license to display and distribute that template to other users. We reserve the right to moderate and delete community templates that violate our policies.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Copyright & Exported Assets</h2>
            <p>
              Title structures, descriptions, and hook templates generated via the app are licensed under royalty-free commercial configurations. You may publish them directly inside monetized YouTube videos. Thumbnails exported from the Thumbnail Maker are your property, provided you have the rights to any base images you import into the editor.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
