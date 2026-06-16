"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";

export default function CommunityGuidelines() {
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
            <Users className="w-4 h-4" /> Community
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          >
            Community Guidelines
          </motion.h1>
          <p className="text-foreground/60">Last Updated: June 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-red max-w-none text-foreground/80 space-y-8">
          <p>
            Welcome to <strong>YouTube Viral Toolkit</strong>, a creator-focused platform operated by Solvex Technology IN. These Community Guidelines help maintain a safe, professional, and useful environment for all creators.
          </p>
          <p>
            By using the App, publishing templates, or participating in the community, you agree to follow these guidelines.
          </p>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Respect Other Creators</h2>
            <p>Users must:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Treat others respectfully.</li>
              <li>Avoid harassment or bullying.</li>
              <li>Avoid abusive or offensive language.</li>
              <li>Avoid threats or intimidation.</li>
            </ul>
            <p>We do not tolerate behavior that creates a hostile environment.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Original Content Only</h2>
            <p>You may publish:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Original templates</li>
              <li>Original titles</li>
              <li>Original descriptions</li>
              <li>Original hooks</li>
              <li>Original scripts</li>
              <li>Original thumbnail concepts</li>
            </ul>
            <p>You may not publish:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Copyrighted content without permission</li>
              <li>Stolen templates</li>
              <li>Reuploaded premium content</li>
              <li>Content copied from paid creator tools</li>
            </ul>
            <p>Repeated violations may result in account suspension.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. No Spam</h2>
            <p>The following are prohibited:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Repeated template submissions</li>
              <li>Automated spam publishing</li>
              <li>Keyword stuffing</li>
              <li>Fake engagement tactics</li>
              <li>Excessive self-promotion</li>
            </ul>
            <p>Spam content may be removed without notice.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. No Adult Content</h2>
            <p>The following are not allowed:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Pornographic content</li>
              <li>Sexually explicit content</li>
              <li>Adult thumbnails</li>
              <li>Sexual exploitation content</li>
              <li>Nudity intended for adult purposes</li>
            </ul>
            <p>Such content will be removed immediately.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. No Hate Speech</h2>
            <p>Users may not publish content that promotes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violence</li>
              <li>Discrimination</li>
              <li>Racism</li>
              <li>Religious hatred</li>
              <li>Ethnic hatred</li>
              <li>Extremist ideologies</li>
            </ul>
            <p>Content encouraging harm toward individuals or groups is prohibited.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. No Illegal Activities</h2>
            <p>Do not publish content promoting:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fraud</li>
              <li>Scams</li>
              <li>Phishing</li>
              <li>Hacking</li>
              <li>Malware</li>
              <li>Illegal downloads</li>
              <li>Illegal financial schemes</li>
            </ul>
            <p>Accounts involved in illegal activity may be permanently banned.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. No Misleading Content</h2>
            <p>Templates must not intentionally mislead users.</p>
            <p><strong>Examples:</strong> Fake earnings claims, Fake subscriber claims, False guarantees, Clickbait scams.</p>
            <p><strong>Allowed:</strong> Creative marketing titles, Standard YouTube hooks, Educational content.</p>
            <p><strong>Not Allowed:</strong> "Guaranteed 1 Million Views", "Guaranteed Monetization", "Guaranteed Revenue".</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. AI Generated Content</h2>
            <p>AI-generated content is allowed. However:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Users remain responsible for what they publish.</li>
              <li>AI content must comply with all guidelines.</li>
              <li>AI-generated spam is prohibited.</li>
            </ul>
            <p>We may remove low-quality or abusive AI-generated content.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. Community Templates</h2>
            <p>Public templates may be: Reviewed, Approved, Rejected, Removed.</p>
            <p>Moderators may take action if content violates policies. Approval is not guaranteed.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">10. User Reports</h2>
            <p>Users may report: Spam, Copyright violations, Offensive content, Fake content, Abuse. Reports are reviewed by moderators.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">11. Intellectual Property</h2>
            <p>Users must respect intellectual property rights. Do not upload:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Trademarked assets without permission</li>
              <li>Copyrighted designs</li>
              <li>Premium marketplace resources</li>
              <li>Paid creator tool assets</li>
            </ul>
            <p>Copyright complaints may result in content removal.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">12. Account Enforcement</h2>
            <p>Violations may result in:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Warning:</strong> For minor violations.</li>
              <li><strong>Content Removal:</strong> For policy violations.</li>
              <li><strong>Temporary Suspension:</strong> For repeated violations.</li>
              <li><strong>Permanent Ban:</strong> For severe violations including Illegal activity, Copyright abuse, Adult content, Hate speech, Fraud.</li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">13. Moderator Rights</h2>
            <p>We reserve the right to: Remove content, Reject submissions, Restrict publishing privileges, Suspend accounts, Permanently ban users when necessary to protect the platform and community.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">14. Safety and Security</h2>
            <p>Never share: Passwords, Banking details, OTP codes, Personal identification documents. Protect your account credentials at all times.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">15. No Affiliation with YouTube</h2>
            <p>YouTube Viral Toolkit is an independent creator platform. It is not affiliated with, endorsed by, or sponsored by:</p>
            <ul className="list-disc pl-6">
              <li><a href="https://www.youtube.com" className="text-red-500 hover:underline">YouTube</a></li>
              <li><a href="https://www.google.com" className="text-red-500 hover:underline">Google</a></li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">16. Updates to Guidelines</h2>
            <p>We may update these Community Guidelines from time to time. Continued use of the App after updates indicates acceptance of the revised guidelines.</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
            <p>Company: Solvex Technology IN</p>
            <p>Website: <a href="https://solvextechnology.in" className="text-red-500 hover:underline">Solvex Technology</a></p>
          </section>
        </div>

      </div>
    </div>
  );
}
