"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Lock, Server, Eye } from "lucide-react";

export default function AdvancedPrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background relative">
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
          <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 pb-10 border-b border-card-border/50">
            <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
              <p className="text-foreground/60 text-lg">Effective Date: June 13, 2026 • Solvex Technology</p>
            </div>
          </div>

          <div className="prose prose-invert prose-lg prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:text-foreground/80 prose-li:text-foreground/80">
            
            <p className="lead text-xl text-foreground/90 font-medium mb-8">
              Solvex Technology ("we," "our," or "us") is committed to protecting your privacy. This comprehensive Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application, "SSC Railway Exam Guide" (the "Application"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
            </p>

            <div className="flex items-center gap-3 mt-12 mb-6">
              <Eye className="w-6 h-6 text-secondary" />
              <h2 className="m-0 text-3xl">1. Information We Collect</h2>
            </div>
            <p>
              We may collect information about you in a variety of ways. The information we may collect via the Application depends on the content and materials you use, and includes:
            </p>
            
            <h3 className="text-xl">A. Personal Data</h3>
            <p>
              Demographic and other personally identifiable information (such as your name and email address) that you voluntarily give to us when choosing to participate in various activities related to the Application, such as creating an account, participating in mock tests, or purchasing premium subscriptions. If you choose to share data about yourself via your profile, online chat, or other interactive areas of the Application, please be advised that all data you disclose in these areas is public and your data will be accessible to anyone who accesses the Application.
            </p>

            <h3 className="text-xl">B. Derivative Data & Analytics</h3>
            <p>
              Information our servers automatically collect when you access the Application, such as your native actions that are integral to the Application, including your mock test scores, time taken per question, chapters visited, and bookmarks created. We use this derivative data strictly to power our AI Analytics engine, providing you with personalized study recommendations and performance insights.
            </p>

            <h3 className="text-xl">C. Financial Data</h3>
            <p>
              Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Application. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor (e.g., Google Play Billing, Razorpay) and you are encouraged to review their privacy policy and contact them directly for responses to your questions.
            </p>

            <div className="flex items-center gap-3 mt-12 mb-6">
              <Server className="w-6 h-6 text-emerald-500" />
              <h2 className="m-0 text-3xl">2. How We Use Your Information</h2>
            </div>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized educational experience. Specifically, we may use information collected about you via the Application to:
            </p>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2">
              <li>Create and manage your account.</li>
              <li>Process your transactions and premium subscriptions.</li>
              <li>Generate a personal profile about your academic performance.</li>
              <li>Deliver targeted AI-driven study plans and question recommendations.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Application.</li>
              <li>Notify you of updates to the Application, new mock tests, or upcoming exam dates.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
              <li>Serve personalized advertisements (if you are on a free tier).</li>
            </ul>

            <div className="flex items-center gap-3 mt-12 mb-6">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="m-0 text-3xl">3. Disclosure of Your Information</h2>
            </div>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>

            <h3 className="text-xl">A. By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </p>

            <h3 className="text-xl">B. Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services (e.g., <strong>Supabase</strong> for secure database infrastructure), customer service, and marketing assistance.
            </p>

            <h3 className="text-xl">C. Third-Party Advertisers</h3>
            <p>
              We use third-party advertising companies (e.g., <strong>Google AdMob</strong>) to serve ads when you visit the Application. These companies may use information about your visits to the Application and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.
            </p>

            <h2 className="text-3xl mt-12">4. Data Security and Retention</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
            </p>

            <h2 className="text-3xl mt-12">5. Policy for Children (COPPA Compliance)</h2>
            <p>
              We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below so we may quickly delete such information.
            </p>

            <h2 className="text-3xl mt-12">6. Your Rights (GDPR & CCPA)</h2>
            <p>
              Depending on your location, you may have the right to request access to the personal data we collect from you, change that information, or delete it in some circumstances. You may review or change the information in your account or terminate your account entirely by visiting our <Link href="/products/ssc-railway/account-deletion" className="text-primary font-bold">Account Deletion Request</Link> page. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-16 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="m-0 text-2xl mb-4">Contact Us</h2>
              <p className="mb-0">
                If you have questions or comments about this Privacy Policy, please contact us at: <br/>
                <strong className="text-primary mt-2 block text-xl">privacy@solvextechnology.com</strong>
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
