import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldAlert, FileText, Ban, Zap, Scale, Gift, Smartphone, Trash2, Info, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "To Do It Terms of Use | Solvex Technology",
  description: "Terms and conditions for the To Do It app.",
};

export default function ToDoItTerms() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-card-border shadow-xl">
          {/* Header Section */}
          <div className="text-center mb-12 border-b border-card-border pb-8">
            <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-3xl border border-card-border bg-white shadow-lg p-2 flex items-center justify-center">
              <Image
                src="/images/todoit-logo.png"
                alt="To Do It logo"
                width={96}
                height={96}
                className="h-full w-full object-cover rounded-2xl"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">To Do It</h1>
            <h2 className="text-2xl text-primary font-semibold mb-2">Terms of Use</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Please read these terms carefully before using the productivity and rewards app.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground/60">
              <span className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-full border border-card-border">
                📋 Last Updated: 28 May 2026
              </span>
              <span className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-full border border-card-border">
                📅 Effective as of 28 May 2026
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10 text-foreground/80 leading-relaxed">
            
            <section>
              <p>
                These terms and conditions apply to the <strong>To Do It</strong> mobile application (hereby referred to as &quot;Application&quot;), developed and operated by <strong>Solvex Technology</strong> (hereby referred to as &quot;Service Provider&quot;) as a Free, ad-supported gamified productivity service.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Agreement to Terms</h3>
              </div>
              <p>
                Upon downloading, creating an account, or utilizing the Application, you automatically agree to follow and be bound by these Terms of Use. If you do not agree with any part of these terms, you must cease using the Application immediately and uninstall it from your device.
              </p>
              <p>
                All trademarks, copyrights, databases, source code, and other intellectual property rights embedded within To Do It remain the exclusive property of Solvex Technology. Any attempt to extract the source code, distribute modified APKs, or clone our systems is strictly prohibited.
              </p>
            </section>

            {/* APP FEATURES COLUMN CHART */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Info className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">App Core Modules &amp; Rules</h3>
              </div>
              <p>
                To Do It is built with multiple productivity modules. The chart below details the exact features and your legal agreements when using them:
              </p>
              
              <div className="overflow-x-auto mt-4 rounded-2xl border border-card-border shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-primary/5 text-foreground font-semibold">
                    <tr>
                      <th className="p-4 border-b border-card-border">Module / Feature</th>
                      <th className="p-4 border-b border-card-border">How it Works &amp; Guidelines</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border bg-background/50">
                    <tr>
                      <td className="p-4 align-top font-medium">Task Management</td>
                      <td className="p-4 align-top">
                        Allows creating personal, categorized (Work, Study, Personal, Health, Shopping), priority-oriented (Low, Medium, High), and recurring daily/weekly/monthly tasks. 
                        <br/>
                        <span className="text-xs text-yellow-500 font-semibold">⚠️ Free Quota limit:</span> Free accounts can create up to 5 tasks per day. You can watch up to 10 rewarded AdMob advertisements per day to unlock bonus task slots.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">Alarms &amp; Notifications</td>
                      <td className="p-4 align-top">
                        Schedules task alarms, streak warnings, and Pomodoro timers. Notifications are local convenience alerts. <strong>We do not assume liability for missed alarms, failed notifications, battery optimization delays, or lost appointments.</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">Voice Input Task Creation</td>
                      <td className="p-4 align-top">
                        Integrates offline Speech-to-Text. You can tap the mic button to speak a command (e.g., &quot;Buy milk tomorrow at 10 am&quot;), which automatically fills out the task dashboard locally. Users must grant the <code className="text-xs text-blue-400">RECORD_AUDIO</code> permission to use this feature.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">Focus Pomodoro Timer</td>
                      <td className="p-4 align-top">
                        A productivity countdown timer for your deep focus sessions. The screen is kept active during the timer via Wake Locks. Successfully completing a focus session yields virtual gamified points.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">Personal Budget ledger</td>
                      <td className="p-4 align-top">
                        Track income (Salary, Freelance, etc.) and expenses (Food, Bills, etc.) and generate downloadable PDF reports. 
                        <br/>
                        <strong>Legal Disclaimer:</strong> To Do It is not a licensed financial service, taxation adviser, or investment platform. Ledgers are strictly for personal tracking.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* GAMIFIED LOYALTY REWARDS POLICY */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Gift className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold text-foreground">Gamified Points &amp; Redemption Policy</h3>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl text-yellow-500 text-sm font-medium">
                ⚠️ IMPORTANT GAMIFICATION RULES: To Do It points are virtual, in-app loyalty rewards meant solely for gamifying productivity. They do not constitute actual currency, cryptocurrency, or legally binding guaranteed financial instruments.
              </div>

              <div className="overflow-x-auto mt-4 rounded-2xl border border-card-border shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-primary/5 text-foreground font-semibold">
                    <tr>
                      <th className="p-4 border-b border-card-border">Gamified Event</th>
                      <th className="p-4 border-b border-card-border">Points Granted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border bg-background/50">
                    <tr>
                      <td className="p-4 align-top font-medium">Normal Task Complete</td>
                      <td className="p-4 align-top text-emerald-400 font-bold">+5 Points</td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">High Priority Task Complete</td>
                      <td className="p-4 align-top text-emerald-400 font-bold">+10 Points</td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">Focus (Pomodoro) Session Complete</td>
                      <td className="p-4 align-top text-emerald-400 font-bold">+10 Points</td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">Daily Goal Met (Default 3 Tasks)</td>
                      <td className="p-4 align-top text-emerald-400 font-bold">+20 Points</td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">7-Day Streak Complete</td>
                      <td className="p-4 align-top text-emerald-400 font-bold">+50 Points</td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">Successful Friend Invite (Referral)</td>
                      <td className="p-4 align-top text-emerald-400 font-bold">+100 Points (to Referrer and Referee)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-bold text-foreground mt-4">Redemption Terms &amp; Eligibility Criteria:</h4>
              <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/70">
                <li><strong>Exchange Rate:</strong> Our in-game conversion matrix standardizes 1,000 points as equivalent to $1.00 USD (or local promotional equivalent).</li>
                <li><strong>Minimum Threshold:</strong> Users must accumulate at least <strong>1,000 points</strong> in their account before submitting a redemption request.</li>
                <li><strong>Activity Check:</strong> In order to maintain eligibility for redemptions, users must have an active streak of at least <strong>7 consecutive days</strong> inside the app.</li>
                <li><strong>Processing:</strong> Redemption requests are manually processed within <strong>48 to 72 hours</strong>. Approved redemptions are fulfilled as promotional goodwill gift cards at our sole discretion.</li>
                <li><strong>No Guaranteed Payouts:</strong> We reserve the right to review, delay, deny, or cancel point conversions if we suspect system errors, fraud, automated clicking, or user inactivity.</li>
              </ul>
            </section>

            {/* ANTI-ABUSE & REFERRAL FRAUD CHECKS */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Ban className="w-6 h-6 text-red-400" />
                <h3 className="text-2xl font-bold text-foreground">Referral Integrity &amp; Strict Anti-Abuse Rules</h3>
              </div>
              <p>
                To maintain a fair ecosystem, the Service Provider operates secure backend scripts (Render API &amp; Cloud Functions) to verify referral actions. You explicitly agree to the following rules:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/70">
                <li>Referral claims are submitted as <strong className="text-orange-400">pending</strong> until anti-fraud algorithms confirm the invited account is unique.</li>
                <li>Creating self-referrals, clone apps, multiple accounts on the same device, or using emulators/bots to artificially multiply points is strictly prohibited.</li>
                <li>Any user detected farming points or abusing Google AdMob rewarded ad counts will have their points balance reset, active cashouts <strong className="text-red-400">rejected</strong>, and their profile permanently banned.</li>
              </ul>
            </section>

            {/* ACCOUNT SAFETY & ROOTING */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-foreground">Device Safety &amp; Rooting Advisory</h3>
              </div>
              <p>
                The Service Provider strongly advises against using the Application on jailbroken or rooted devices. Rooting compromises native Android security barriers and may cause task notifications, exact alarms, Google Sign-in Auth systems, AdMob rewards, and the local Speech-to-Text mic modules to malfunction. Operating on rooted devices voids all reward points eligibility.
              </p>
            </section>

            {/* SERVICE MODIFICATION AND UPDATE RIGHTS */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-foreground">Modifications and Discontinuation</h3>
              </div>
              <p>
                We reserve the right to modify the Application, alter the reward point allocation rules, change daily ad thresholds, or terminate this service at any time and for any reason without prior notice.
              </p>
            </section>

            {/* ACCOUNT DELETION */}
            <section className="space-y-4 bg-red-500/5 p-6 rounded-2xl border border-red-500/10">
              <div className="flex items-center gap-3">
                <Trash2 className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-bold text-foreground">Account Deletion</h3>
              </div>
              <p>
                You have the complete right to terminate your agreement with us. You can permanently delete your profile, earned points, tasks, and budget ledgers by clicking the red <strong>Delete Account</strong> button in your Profile Screen settings inside the app.
              </p>
              <Link href="/products/todoit/delete-account" className="inline-block mt-2 font-bold text-primary hover:underline">
                📖 View Account Deletion Step-by-Step Guide →
              </Link>
            </section>

            {/* CONTACT */}
            <div className="mt-12 pt-8 border-t border-card-border">
              <div className="flex flex-col items-center text-center space-y-4">
                <Mail className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold text-lg">📩 Questions about these Terms?</h4>
                  <p className="text-foreground/70 mt-1">If you have suggestions or inquiries about the Terms of Use, contact us at:</p>
                  <a href="mailto:support@solvextechnology.in" className="text-primary font-bold hover:underline block mt-2 text-lg">
                    support@solvextechnology.in
                  </a>
                </div>
              </div>
              
              <div className="mt-12 flex flex-col items-center gap-4 text-sm text-foreground/60 border-t border-card-border pt-6">
                <Link href="/products/todoit/privacy-policy" className="font-bold text-primary hover:underline">
                  🔒 View Privacy Policy →
                </Link>
                <p>© 2026 To Do It. All rights reserved. | Operated by Solvex Technology</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
