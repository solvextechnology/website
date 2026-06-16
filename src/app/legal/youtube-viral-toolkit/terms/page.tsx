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
          <p className="text-foreground/60">Last Updated: June 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-red max-w-none text-foreground/80 space-y-8">
          <p>
            Welcome to <strong>YouTube Viral Toolkit</strong>. By downloading, installing, or using YouTube Viral Toolkit, you agree to these Terms & Conditions.
          </p>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p>By using the App, you agree to comply with these Terms. If you do not agree, do not use the App.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Service Description</h2>
            <p>YouTube Viral Toolkit provides creator tools including:</p>
            <ul className="list-disc pl-6">
              <li>Title Generation</li>
              <li>Hashtag Generation</li>
              <li>Tag Generation</li>
              <li>SEO Tools</li>
              <li>Hook Generators</li>
              <li>Script Generators</li>
              <li>Template Libraries</li>
              <li>Community Templates</li>
              <li>AI Creator Tools</li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. User Responsibilities</h2>
            <p>Users agree not to:</p>
            <ul className="list-disc pl-6">
              <li>Upload illegal content</li>
              <li>Upload copyrighted content without permission</li>
              <li>Upload malware or harmful files</li>
              <li>Abuse the platform</li>
              <li>Attempt unauthorized access</li>
              <li>Spam community sections</li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Community Content</h2>
            <p>Users remain responsible for content they publish. We reserve the right to:</p>
            <ul className="list-disc pl-6">
              <li>Remove content</li>
              <li>Suspend accounts</li>
              <li>Restrict access</li>
              <li>Delete violating material</li>
            </ul>
            <p className="mt-4">without prior notice.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Intellectual Property</h2>
            <p>The App, branding, logos, design, and software remain the property of Solvex Technology IN. Users retain ownership of their original content.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. AI Generated Results</h2>
            <p>AI generated suggestions are provided "as is." We do not guarantee:</p>
            <ul className="list-disc pl-6">
              <li>Viral performance</li>
              <li>Search ranking improvements</li>
              <li>Monetization approval</li>
              <li>Revenue increases</li>
              <li>Subscriber growth</li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. No YouTube Affiliation</h2>
            <p>YouTube Viral Toolkit is an independent application. It is not affiliated with, endorsed by, or sponsored by:</p>
            <ul className="list-disc pl-6">
              <li><a href="https://www.youtube.com" className="text-red-500 hover:underline">YouTube</a></li>
              <li><a href="https://www.google.com" className="text-red-500 hover:underline">Google</a></li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Account Suspension</h2>
            <p>We may suspend or terminate accounts for:</p>
            <ul className="list-disc pl-6">
              <li>Fraud</li>
              <li>Abuse</li>
              <li>Copyright violations</li>
              <li>Harmful activities</li>
              <li>Policy violations</li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. Limitation of Liability</h2>
            <p>We are not responsible for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Data loss</li>
              <li>Revenue loss</li>
              <li>Subscriber loss</li>
              <li>Account penalties</li>
              <li>Platform policy actions by third parties</li>
            </ul>
            <p>Use the App at your own risk.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">10. Service Availability</h2>
            <p>We do not guarantee uninterrupted availability. Features may be modified, removed, or updated without notice.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">11. Governing Law</h2>
            <p>These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of Indian courts.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">12. Contact</h2>
            <p>Company: Solvex Technology IN</p>
            <p>Website: <a href="https://solvextechnology.in" className="text-red-500 hover:underline">Solvex Technology</a></p>
          </section>
        </div>

      </div>
    </div>
  );
}
