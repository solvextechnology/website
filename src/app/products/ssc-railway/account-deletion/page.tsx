"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Trash2, AlertTriangle, CheckCircle2, Clock, Database, ShieldAlert } from "lucide-react";

export default function AdvancedAccountDeletionPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/5 via-background to-background relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/products/ssc-railway" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Product
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-14 rounded-[40px] border border-card-border shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 p-32 bg-red-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 pb-10 border-b border-card-border/50">
            <div className="w-16 h-16 rounded-3xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
              <Trash2 className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">Account Deletion</h1>
              <p className="text-foreground/60 text-lg">Data Removal & GDPR/CCPA Compliance Instructions</p>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 mb-12 flex flex-col md:flex-row gap-6">
            <AlertTriangle className="w-10 h-10 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-red-400 font-bold text-xl mb-3">Critical Warning: Irreversible Action</h3>
              <p className="text-foreground/80 text-base leading-relaxed mb-4">
                Deleting your account is a permanent, irreversible action. Once the deletion process is completed, Solvex Technology cannot recover your data under any circumstances.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-foreground/70">
                <li className="flex items-center gap-2"><Trash2 className="w-4 h-4 text-red-500/70"/> Loss of all mock test history & analytics.</li>
                <li className="flex items-center gap-2"><Trash2 className="w-4 h-4 text-red-500/70"/> Deletion of all saved bookmarks & notes.</li>
                <li className="flex items-center gap-2"><Trash2 className="w-4 h-4 text-red-500/70"/> Loss of in-app premium access linked to this account.</li>
                <li className="flex items-center gap-2"><Trash2 className="w-4 h-4 text-red-500/70"/> Erasure of profile and leaderboard ranking.</li>
              </ul>
            </div>
          </div>

          <div className="prose prose-invert prose-lg prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-foreground/80">
            
            <div className="flex items-center gap-3 mt-12 mb-6">
              <Database className="w-6 h-6 text-primary" />
              <h2 className="m-0 text-3xl">Method 1: Immediate In-App Deletion</h2>
            </div>
            <p>
              In compliance with Google Play Store data safety policies, we provide a seamless way to delete your account and associated data directly from within the SSC Railway Exam Guide application.
            </p>
            <div className="bg-card border border-card-border rounded-2xl p-8 my-6">
              <ol className="list-decimal pl-6 space-y-4 text-foreground/90 font-medium marker:text-primary marker:font-bold">
                <li>Launch the <strong>SSC Railway Exam Guide</strong> app and log into your account.</li>
                <li>Navigate to the <strong>Profile</strong> tab on the bottom navigation bar.</li>
                <li>Open the <strong>Settings</strong> gear icon located at the top right.</li>
                <li>Scroll to the bottom and select the <span className="text-red-400">Delete Account</span> option under the Danger Zone.</li>
                <li>You will be prompted to re-enter your password or verify via OTP to confirm your identity.</li>
                <li>Acknowledge the final warning and tap <strong>"Yes, Delete My Account Permanently"</strong>.</li>
              </ol>
            </div>

            <div className="flex items-center gap-3 mt-12 mb-6">
              <Clock className="w-6 h-6 text-secondary" />
              <h2 className="m-0 text-3xl">Method 2: Manual Web Request (Grace Period)</h2>
            </div>
            <p>
              If you have lost access to your device, uninstalled the app, or prefer to have our privacy team handle the deletion, you may submit a manual data erasure request via email.
            </p>
            
            <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-8 mt-6">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-2"><CheckCircle2 className="w-6 h-6 text-emerald-500"/> Official Request Format</h4>
              <p className="text-base text-foreground/70 mb-6">
                Please send an email from the <strong>exact email address</strong> associated with your SSC Railway Exam Guide account to initiate the deletion process.
              </p>
              
              <div className="bg-background p-6 rounded-xl border border-card-border font-mono text-sm text-foreground/80 leading-relaxed">
                <span className="text-foreground/50">To:</span> privacy@solvextechnology.com<br/>
                <span className="text-foreground/50">Subject:</span> GDPR/CCPA Account Erasure Request - SSC Railway App<br/><br/>
                <span className="text-foreground/50">Body:</span><br/>
                To the Solvex Technology Privacy Team,<br/><br/>
                I am writing to formally request the immediate and permanent deletion of my account and all associated personal data from the SSC Railway Exam Guide database, in accordance with applicable data protection laws.<br/><br/>
                Registered Email: [Your Email Address]<br/>
                Registered Phone Number: [Your Phone Number, if applicable]<br/>
                Full Name: [Your Name]
              </div>
            </div>

            <div className="flex items-center gap-3 mt-12 mb-6">
              <ShieldAlert className="w-6 h-6 text-emerald-500" />
              <h2 className="m-0 text-3xl">Data Retention & Compliance</h2>
            </div>
            <p>
              Upon initiating a deletion request, your account will be immediately deactivated and become inaccessible. However, please note the following data retention guidelines:
            </p>
            <ul>
              <li><strong>30-Day Erasure Window:</strong> Complete erasure of your data from our active databases and backup servers (Supabase) may take up to 30 days from the date of the request.</li>
              <li><strong>Financial Records:</strong> If you purchased a Premium service, strictly necessary transaction records such as invoices, order IDs, taxes, refunds, and fraud-prevention logs may be retained longer where required by law, accounting rules, platform policies, or dispute-resolution needs.</li>
              <li><strong>Third-Party Analytics:</strong> Anonymized, aggregated performance metrics (which cannot be traced back to you) may remain in our dataset to improve our AI algorithms.</li>
            </ul>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
