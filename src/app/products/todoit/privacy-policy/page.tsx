import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Database, Share2, Trash2, Smartphone, Mail, Eye, Key } from "lucide-react";

export const metadata: Metadata = {
  title: "To Do It Privacy Policy | Solvex Technology",
  description: "Privacy policy for the To Do It productivity, budgeting, and rewards application.",
};

export default function ToDoItPrivacyPolicy() {
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
            <h2 className="text-2xl text-primary font-semibold mb-2">Privacy Policy</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              How we collect, secure, and process your user data in full compliance with the Google Play Developer Policy.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground/60">
              <span className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-full border border-card-border">
                🔒 Last Updated: 28 May 2026
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
                This privacy policy applies to the <strong>To Do It</strong> application (hereby referred to as &quot;Application&quot;) for mobile devices, developed and operated by <strong>Solvex Technology</strong> (hereby referred to as &quot;Service Provider&quot;) as a Free service. 
              </p>
              <p className="mt-4">
                To Do It is a multi-feature productivity dashboard combining <strong>Task Management, Focus Timers (Pomodoro), Streak &amp; Habit tracking, Personal Budgeting (income/expense tracker), Voice-Input task creation, and a points-based Loyalty/Referral rewards program</strong>. This policy is written transparently to explain exactly what data is collected to power these specific features and how we strictly protect it.
              </p>
            </section>

            {/* DATA COLLECTION COLUMN CHART */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">User Data Collection &amp; Purpose Chart</h3>
              </div>
              <p>
                In accordance with Google Play Console regulations, the table below outlines exactly what information is collected, how it is used, and where it is stored.
              </p>
              
              <div className="overflow-x-auto mt-4 rounded-2xl border border-card-border shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-primary/5 text-foreground font-semibold">
                    <tr>
                      <th className="p-4 border-b border-card-border">Data Component</th>
                      <th className="p-4 border-b border-card-border">Features Using This Data</th>
                      <th className="p-4 border-b border-card-border">Google Play Category &amp; Storage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border bg-background/50">
                    <tr>
                      <td className="p-4 align-top font-medium">Account Details<br/><span className="text-xs text-foreground/50 font-normal">Name, Email, Google Profile Pic, User UID</span></td>
                      <td className="p-4 align-top">
                        Secure Authentication (Firebase Auth), syncing tasks and budgets across your multiple devices, and maintaining your personal profile, rewards, level progression, and streak history.
                      </td>
                      <td className="p-4 align-top text-foreground/70">
                        <strong>Personal Info</strong><br/>
                        <span className="text-xs text-emerald-400">Stored in Cloud Firestore (Encrypted)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">Productivity &amp; Tasks<br/><span className="text-xs text-foreground/50 font-normal">Task titles, descriptions, times, categories, completion state</span></td>
                      <td className="p-4 align-top">
                        Core Task Management dashboard. Supports task categories (Work, Study, Personal, Health, Shopping), priority mapping (Low, Medium, High), recurring events, and calculating points rewards upon completion (+5 pts, or +10 pts for high-priority).
                      </td>
                      <td className="p-4 align-top text-foreground/70">
                        <strong>App Activity</strong><br/>
                        <span className="text-xs text-emerald-400">Synced to Firebase Cloud database</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">Focus &amp; Timer Data<br/><span className="text-xs text-foreground/50 font-normal">Pomodoro sessions, duration, task-linkage, timestamp</span></td>
                      <td className="p-4 align-top">
                        Focus module. Tracks completed Pomodoro study/work intervals, links them to active tasks, and issues +10 focus points per complete session to encourage long-term concentration.
                      </td>
                      <td className="p-4 align-top text-foreground/70">
                        <strong>App Activity</strong><br/>
                        <span className="text-xs text-emerald-400">Saved in cloud for user history and rewards verification</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">Budget Ledger Entries<br/><span className="text-xs text-foreground/50 font-normal">Incomes, expenses, amounts, notes, transaction dates</span></td>
                      <td className="p-4 align-top">
                        Personal Budget Planner. Processes your personal records to draw analytics charts, calculate balances, and format downloadable local PDF ledger files (e.g., Food, Travel, Salary, Freelance).
                      </td>
                      <td className="p-4 align-top text-foreground/70">
                        <strong>Financial Info</strong><br/>
                        <span className="text-xs text-emerald-400">Encrypted in Firestore. Generated PDFs are strictly local.</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">Rewards &amp; Referrals<br/><span className="text-xs text-foreground/50 font-normal">Points ledger, referral codes, risk flags, pending/approved status</span></td>
                      <td className="p-4 align-top">
                        Rewards gamification. Powers point redemptions (1,000 pts minimum, via Render backend server), anti-abuse verification, referral tracking (+100 points for inviting others), and daily streak tallies (+20 pts daily goal, +50 pts 7-day bonus).
                      </td>
                      <td className="p-4 align-top text-foreground/70">
                        <strong>App Activity / Diagnostics</strong><br/>
                        <span className="text-xs text-emerald-400">Processed by secured Render API &amp; Firestore</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-medium">Device Ad ID &amp; Diagnostics<br/><span className="text-xs text-foreground/50 font-normal">Google Advertising ID (AD_ID), Crash logs, install tokens</span></td>
                      <td className="p-4 align-top">
                        Delivering Google AdMob rewarded video ads (limited to 10 daily) to let you unlock additional daily task slots. Performance monitoring via Firebase Crashlytics.
                      </td>
                      <td className="p-4 align-top text-foreground/70">
                        <strong>Device or Other IDs / Performance</strong><br/>
                        <span className="text-xs text-emerald-400">Google AdMob / Crashlytics (Standard SDKs)</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* APP PERMISSIONS EXPLAINED */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-foreground">Hardware Permissions Explained (Purpose-Driven)</h3>
              </div>
              <p>To operate smoothly on Android, the Application explicitly requests access to the following OS features. We collect zero data through these permissions other than the offline actions described below:</p>
              
              <div className="overflow-x-auto mt-4 rounded-2xl border border-card-border shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-primary/5 text-foreground font-semibold">
                    <tr>
                      <th className="p-4 border-b border-card-border">Android Permission</th>
                      <th className="p-4 border-b border-card-border">Why the App Requests It</th>
                      <th className="p-4 border-b border-card-border">Offline vs Online State</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border bg-background/50">
                    <tr>
                      <td className="p-4 align-top font-mono text-xs text-blue-400 font-bold">RECORD_AUDIO</td>
                      <td className="p-4 align-top">
                        Used exclusively for the <strong>Voice-Input Command System</strong>. The app uses the on-device Speech-to-Text engine to listen to your voice command (e.g., &quot;Gym tomorrow at 9 AM urgent&quot;), automatically extracting the task name, date, time, and priority.
                      </td>
                      <td className="p-4 align-top">
                        <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">Processed Locally</span><br/>
                        <span className="text-[11px] text-foreground/50">Audio is never recorded, saved, or uploaded.</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-mono text-xs text-blue-400 font-bold">POST_NOTIFICATIONS</td>
                      <td className="p-4 align-top">
                        Enables the app to display scheduled task reminders, focus alerts, daily goal warnings, and streak preservation notifications.
                      </td>
                      <td className="p-4 align-top">
                        <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full font-bold">Local Device</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-mono text-xs text-blue-400 font-bold">SCHEDULE_EXACT_ALARM /<br/>USE_EXACT_ALARM</td>
                      <td className="p-4 align-top">
                        Required to schedule highly critical notifications that must trigger at an exact minute specified by you, preventing the Android system from delaying your productivity alerts.
                      </td>
                      <td className="p-4 align-top">
                        <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full font-bold">Local Device</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-mono text-xs text-blue-400 font-bold">USE_FULL_SCREEN_INTENT</td>
                      <td className="p-4 align-top">
                        Allows high-priority task alerts to bypass screen sleep states and overlay a full-screen alarm interface, ring the device loudly, and wake you up, similar to a physical alarm clock.
                      </td>
                      <td className="p-4 align-top">
                        <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full font-bold">Local Device</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-mono text-xs text-blue-400 font-bold">WAKE_LOCK</td>
                      <td className="p-4 align-top">
                        Ensures your smartphone&apos;s CPU remains awake during active focus sessions so the Pomodoro countdown timer does not freeze or stop running if you set your phone down.
                      </td>
                      <td className="p-4 align-top">
                        <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full font-bold">Local Device</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top font-mono text-xs text-blue-400 font-bold">RECEIVE_BOOT_COMPLETED</td>
                      <td className="p-4 align-top">
                        Tells the app to automatically restore and reschedule your task reminders, daily streaks, and alarm alerts when you restart your smartphone.
                      </td>
                      <td className="p-4 align-top">
                        <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full font-bold">Local Device</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* THIRD PARTY INTEGRATION & SECURITY */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Share2 className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">Secure Infrastructure &amp; Third-Party Services</h3>
              </div>
              <p>
                We do not sell, rent, or trade your data. To Do It utilizes trusted platform-as-a-service providers to secure databases and deliver features. Below are the third-party privacy frameworks we build upon:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
                <div className="p-4 rounded-xl border border-card-border bg-background/50">
                  <h4 className="font-bold text-foreground mb-1">Google Play Services &amp; Firebase</h4>
                  <p className="text-foreground/60 text-xs mb-2">Provides the safe Firebase Authentication system, Cloud Firestore databases, and live diagnostics via Crashlytics.</p>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline font-semibold text-xs">Google Privacy Policy →</a>
                </div>
                <div className="p-4 rounded-xl border border-card-border bg-background/50">
                  <h4 className="font-bold text-foreground mb-1">Google AdMob</h4>
                  <p className="text-foreground/60 text-xs mb-2">Delivers rewarded advertisements securely and handles personalized or contextual ad targeting per Google policies.</p>
                  <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noreferrer" className="text-primary hover:underline font-semibold text-xs">AdMob Privacy Policy →</a>
                </div>
                <div className="p-4 rounded-xl border border-card-border bg-background/50">
                  <h4 className="font-bold text-foreground mb-1">Secure Reward API Backend</h4>
                  <p className="text-foreground/60 text-xs mb-2">Hosted on Render servers to process in-app points, execute secure, anti-abuse referral campaigns, and queues redemptions.</p>
                  <span className="text-foreground/40 text-xs font-semibold">Protected via SSL &amp; JWT Bearer Tokens</span>
                </div>
                <div className="p-4 rounded-xl border border-card-border bg-background/50">
                  <h4 className="font-bold text-foreground mb-1">Speech to Text SDK</h4>
                  <p className="text-foreground/60 text-xs mb-2">Leverages the native Android OS Speech Recognizer, processing voice task input locally with absolute offline privacy.</p>
                  <span className="text-foreground/40 text-xs font-semibold">Strictly Device Local Processing</span>
                </div>
              </div>
            </section>

            {/* DATA SAFETY, SECURITY & EXPLICIT DELETION */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold text-foreground">Data Security Practices</h3>
              </div>
              <p>
                We use secure Firebase Firestore server rules to guarantee that only the owner of a specific Google Sign-In or Password account has read and write permissions to their personal tasks, focus timers, profile settings, and budgeting books. Our backend integrations with the Render API are protected with industry-standard JWT Authentication Bearer tokens generated securely via Firebase.
              </p>
            </section>

            <section className="space-y-4 bg-red-500/5 p-6 rounded-2xl border border-red-500/10">
              <div className="flex items-center gap-3">
                <Trash2 className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-bold text-foreground">Direct Account &amp; Data Deletion</h3>
              </div>
              <p>
                We support data privacy and give you full control. Under Google Play&apos;s User Data deletion policy, we provide two quick ways to permanently wipe your digital footprint:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-xl border border-red-500/10 bg-background/40">
                  <h5 className="font-bold text-foreground mb-1">⚡ In-App Deletion (Instant)</h5>
                  <p className="text-xs text-foreground/70">Go to your in-app <strong>Profile Settings Screen</strong>, tap the red <strong>Delete Account</strong> button, and confirm. This immediately:
                  </p>
                  <ul className="list-disc pl-5 mt-1 text-[11px] text-foreground/60 space-y-1">
                    <li>Wipes your Firebase Auth account permanently</li>
                    <li>Deletes all tasks, budget logs, and focus sessions</li>
                    <li>Resets and clears points and rewards profiles</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl border border-red-500/10 bg-background/40">
                  <h5 className="font-bold text-foreground mb-1">✉️ Email Support Request</h5>
                  <p className="text-xs text-foreground/70">Send an email to <a href="mailto:support@solvextechnology.in" className="text-primary hover:underline font-bold">support@solvextechnology.in</a> requesting deletion. We will verify and process the removal within 7 days.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/products/todoit/delete-account" className="inline-flex items-center gap-1 font-bold text-primary hover:underline">
                  📖 Read our Step-by-Step Account Deletion Guide →
                </Link>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Policy Updates</h3>
              <p>
                We may modify this policy as app modules grow. If we launch any updates, the new policy will be posted live on this page, and the Last Updated date will be modified accordingly. Continued usage of the Application indicates your understanding and acceptance of these data policies.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-card-border">
              <div className="flex flex-col items-center text-center space-y-4">
                <Mail className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold text-lg">📩 Contact Data Protection Officer</h4>
                  <p className="text-foreground/70 mt-1">If you have any questions or data requests, contact Solvex Technology at:</p>
                  <a href="mailto:support@solvextechnology.in" className="text-primary font-bold hover:underline block mt-2 text-lg">
                    support@solvextechnology.in
                  </a>
                </div>
              </div>
              
              <div className="mt-12 flex flex-col items-center gap-4 text-sm text-foreground/60 border-t border-card-border pt-6">
                <Link href="/products/todoit/terms" className="font-bold text-primary hover:underline">
                  📋 View Terms of Use →
                </Link>
                <p>© 2026 To Do It. All rights reserved. | Powered by Solvex Technology</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
