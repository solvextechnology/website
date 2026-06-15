"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText, AlertTriangle, BookOpen, Scale, CreditCard } from "lucide-react";

export default function AdvancedTermsAndConditions() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/5 via-background to-background relative">
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
          <div className="absolute top-0 right-0 p-32 bg-secondary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 pb-10 border-b border-card-border/50">
            <div className="w-16 h-16 rounded-3xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <FileText className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">Terms of Service</h1>
              <p className="text-foreground/60 text-lg">Effective Date: June 13, 2026 • Solvex Technology</p>
            </div>
          </div>

          <div className="prose prose-invert prose-lg prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-p:text-foreground/80 prose-li:text-foreground/80">
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-10 flex gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-yellow-400 font-bold m-0 mb-2">Important Notice</h3>
                <p className="text-foreground/80 text-base leading-relaxed m-0">
                  Please read these Terms of Service carefully before accessing or using our application. By accessing or using any part of the application, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the application or use any services.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-12 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="m-0 text-3xl">1. Educational Purpose & Disclaimer</h2>
            </div>
            <p>
              The <strong>SSC Railway Exam Guide</strong> application is an independent educational platform operated by Solvex Technology. We are <strong>strictly not affiliated, associated, authorized, endorsed by, or in any way officially connected with the Staff Selection Commission (SSC), the Railway Recruitment Board (RRB)</strong>, or any government agency.
            </p>
            <p>
              All mock tests, previous year questions, and study materials are provided for educational and preparation purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the educational content. Your reliance on such information is therefore strictly at your own risk.
            </p>

            <div className="flex items-center gap-3 mt-12 mb-6">
              <Scale className="w-6 h-6 text-emerald-500" />
              <h2 className="m-0 text-3xl">2. Intellectual Property Rights</h2>
            </div>
            <p>
              Other than the content you own, under these Terms, Solvex Technology and/or its licensors own all the intellectual property rights and materials contained in this Application. This includes, but is not limited to, our proprietary AI analytics engine, UI/UX designs, specific test structures, and source code.
            </p>
            <p>
              You are granted limited license only for purposes of viewing the material contained on this Application. You are specifically restricted from all of the following:
            </p>
            <ul>
              <li>Publishing any Application material in any other media without explicit permission.</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Application material.</li>
              <li>Publicly performing and/or showing any Application material (e.g., streaming our premium tests on YouTube without a Creator License).</li>
              <li>Using this Application to engage in any advertising or marketing without our consent.</li>
              <li>Scraping, data mining, or extracting our question banks using automated scripts or bots.</li>
            </ul>

            <div className="flex items-center gap-3 mt-12 mb-6">
              <CreditCard className="w-6 h-6 text-accent" />
              <h2 className="m-0 text-3xl">3. Premium Subscriptions & Billing</h2>
            </div>
            <p>
              Certain sections of the Application, such as Advanced Mock Tests, Live Leaderboards, and Ad-Free experiences, are billed on a subscription basis ("Premium Services").
            </p>
            <ul>
              <li><strong>Billing Cycle:</strong> You will be billed in advance on a recurring and periodic basis (such as monthly or annually), depending on the type of subscription plan you select when purchasing.</li>
              <li><strong>Auto-Renewal:</strong> Unless you cancel your subscription before the end of the applicable billing cycle, your subscription will automatically renew under the exact same conditions.</li>
              <li><strong>Cancellations & Refunds:</strong> You may cancel your Premium subscription renewal either through your online account management page or by contacting our customer support team. Subscriptions are processed via Google Play Billing or our authorized payment gateways, and refunds are handled according to the respective platform's policies.</li>
            </ul>

            <h2 className="text-3xl mt-12">4. User Accounts & Data Integrity</h2>
            <p>
              When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Application.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Application and for any activities or actions under your password. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>

            <h2 className="text-3xl mt-12">5. Limitation of Liability</h2>
            <p>
              In no event shall Solvex Technology, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Application whether such liability is under contract. Solvex Technology, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Application.
            </p>

            <h2 className="text-3xl mt-12">6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which Solvex Technology is registered, and you submit to the non-exclusive jurisdiction of the state and federal courts located in us for the resolution of any disputes.
            </p>

            <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-8 mt-16 text-center">
              <h2 className="m-0 text-2xl mb-4">Questions About Our Terms?</h2>
              <p className="mb-0">
                Contact our legal compliance team at: <br/>
                <strong className="text-secondary mt-2 block text-xl">legal@solvextechnology.com</strong>
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
