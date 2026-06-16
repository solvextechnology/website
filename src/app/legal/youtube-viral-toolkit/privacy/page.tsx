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
          <p className="text-foreground/60">Last Updated: June 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-red max-w-none text-foreground/80 space-y-8">
          <p>
            Welcome to <strong>YouTube Viral Toolkit</strong> ("App", "we", "our", "us"), operated by Solvex Technology IN.
            This Privacy Policy explains how we collect, use, store, and protect your information when you use our mobile application and related services.
          </p>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Account Information</h3>
            <p>When you sign in using Google or other authentication methods, we may collect:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email Address</li>
              <li>Profile Photo</li>
              <li>Unique User ID</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">User Generated Content</h3>
            <p>We may store:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Generated titles</li>
              <li>Tags</li>
              <li>Hashtags</li>
              <li>Hooks</li>
              <li>Descriptions</li>
              <li>Scripts</li>
              <li>Templates</li>
              <li>Saved projects</li>
              <li>Community submissions</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Device Information</h3>
            <p>We may automatically collect:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Device type</li>
              <li>Operating system</li>
              <li>App version</li>
              <li>Crash reports</li>
              <li>Performance analytics</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Advertising Information</h3>
            <p>
              If advertisements are displayed, advertising partners may collect limited information as permitted by their privacy policies.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Information</h2>
            <p>We use information to:</p>
            <ul className="list-disc pl-6">
              <li>Provide app functionality</li>
              <li>Save user projects</li>
              <li>Sync templates across devices</li>
              <li>Improve app performance</li>
              <li>Provide AI-powered tools</li>
              <li>Prevent abuse and spam</li>
              <li>Moderate community content</li>
              <li>Respond to support requests</li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Community Templates</h2>
            <p>Users may publish templates to the public community. By publishing content publicly:</p>
            <ul className="list-disc pl-6">
              <li>You grant us permission to display that content.</li>
              <li>Other users may view and download your published templates.</li>
              <li>We may remove content that violates our policies.</li>
            </ul>
            <p className="mt-4">Private templates remain accessible only to the account owner.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. AI Generated Content</h2>
            <p>The App may use artificial intelligence services to generate: Titles, Tags, Hooks, Descriptions, Scripts, and other creator resources.</p>
            <p className="mt-4">Generated content is provided for informational purposes only. We do not guarantee:</p>
            <ul className="list-disc pl-6">
              <li>Virality</li>
              <li>Views</li>
              <li>Subscribers</li>
              <li>Revenue</li>
              <li>Search rankings</li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Storage</h2>
            <p>Data may be stored using secure cloud providers including: Firebase, Supabase, and Cloud Storage Providers. Reasonable security measures are used to protect user information.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Advertising</h2>
            <p>The App may display advertisements through advertising partners. Third-party advertising providers may collect information according to their own privacy policies.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. Children's Privacy</h2>
            <p>The App is not intended for children under 13 years of age. We do not knowingly collect personal information from children.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Data Deletion</h2>
            <p>Users may request account or data deletion by contacting us. Published community content may remain visible until moderation or removal is completed.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. Third Party Services</h2>
            <p>The App may use: Google Sign-In, Firebase, Supabase, Google AdMob, Google Analytics, and AI Service Providers. Each service has its own privacy practices.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">10. Changes to Privacy Policy</h2>
            <p>We may update this Privacy Policy at any time. Continued use of the App after updates constitutes acceptance of the revised policy.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contact Us</h2>
            <p>Company: Solvex Technology IN</p>
            <p>Website: <a href="https://solvextechnology.in" className="text-red-500 hover:underline">solvextechnology.in</a></p>
          </section>
        </div>

      </div>
    </div>
  );
}
