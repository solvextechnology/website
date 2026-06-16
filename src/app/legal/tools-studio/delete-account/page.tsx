"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Trash2, AlertTriangle, ShieldCheck } from "lucide-react";

export default function DeleteAccount() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/10 via-background to-background relative overflow-hidden">
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button */}
        <Link href="/products/tools-studio" className="inline-flex items-center gap-2 text-foreground/60 hover:text-red-500 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Product
        </Link>

        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-sm text-red-500 font-bold uppercase tracking-wider mb-6"
          >
            <Trash2 className="w-4 h-4" /> Account Management
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          >
            Data Deletion Instructions
          </motion.h1>
          <p className="text-foreground/60">Learn how to completely remove your account and data from Tools Studio.</p>
        </div>

        {/* Warning Banner */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-12 flex gap-4">
          <AlertTriangle className="w-8 h-8 text-red-500 shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-red-500 mb-2">Warning: This action is irreversible</h3>
            <p className="text-foreground/70 text-sm">
              Deleting your account will permanently erase your Token Wallet balance, your active Premium Subscription (if any), and your profile data from our secure Supabase backend. You cannot recover these items once deleted.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-red max-w-none text-foreground/80 space-y-8">
          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-500" /> 
              How to Delete Your Account
            </h2>
            <p className="mb-6">
              You can initiate a complete account deletion directly from within the Tools Studio mobile app. Follow these simple steps:
            </p>
            <ol className="list-decimal pl-6 space-y-4 font-medium text-foreground/90">
              <li>Open the Tools Studio app on your Android device.</li>
              <li>Tap the <strong className="text-white">Profile Avatar</strong> icon in the top right corner of the Dashboard.</li>
              <li>Scroll down and tap on <strong className="text-white">Account Management</strong>.</li>
              <li><strong className="text-emerald-400">Security Step:</strong> Tap <strong>Sign Out</strong>, then sign back into the app. Firebase requires a fresh login to verify your identity before allowing data deletion.</li>
              <li>Return to Account Management and tap the <strong className="text-red-500">"Delete My Account"</strong> button.</li>
              <li>Read the warning prompt carefully, and tap <strong className="text-red-500">"Delete"</strong> to confirm.</li>
            </ol>
            <p className="mt-8 text-sm text-foreground/50 border-t border-card-border/50 pt-6">
              If you have already uninstalled the app and wish to delete your data, you must reinstall the app, sign in with the Google account you used, and follow the steps above to authorize the deletion directly from your device.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
