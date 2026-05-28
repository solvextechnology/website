import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, ShieldCheck, TriangleAlert, Trash2, Database, Send, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Delete Your To Do It Account | Solvex Technology",
  description: "Step-by-step instructions to delete your To Do It account and associated app data.",
};

const emailTemplate = `To: support@solvextechnology.in

Subject: Account Deletion Request - To Do It App

Hello To Do It Support Team,

I would like to request the permanent deletion of my account and all associated personal data from the To Do It app.

Registered Email ID: [Your Email Address]

Full Name: [Your Full Name]

Please confirm once my account and data have been deleted.

Thank you.`;

const mailtoHref = `mailto:support@solvextechnology.in?subject=${encodeURIComponent(
  "Account Deletion Request - To Do It App",
)}&body=${encodeURIComponent(
  "Hello To Do It Support Team,\n\nI would like to request the permanent deletion of my account and all associated personal data from the To Do It app.\n\nRegistered Email ID: [Your Email Address]\nFull Name: [Your Full Name]\n\nPlease confirm once my account and data have been deleted.\n\nThank you.",
)}`;

export default function ToDoItDeleteAccount() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-card-border shadow-xl bg-card/40 backdrop-blur-sm">
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
            <h2 className="text-2xl text-primary font-semibold mb-2">🗑️ Delete My Account</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Account & Data Deletion — Step-by-step guide
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground/60">
              <span className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-full border border-card-border text-primary font-bold">
                <Clock className="w-4 h-4" /> ⏱️ Processed within 7 days
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10 text-foreground/80 leading-relaxed">
            
            <section className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
              <p className="text-foreground/90 font-medium leading-relaxed">
                📋 To delete your To Do It account and all associated personal data, simply send an email to <a href="mailto:support@solvextechnology.in" className="text-primary font-bold hover:underline">support@solvextechnology.in</a> with your registered email ID and name. No app login required.
              </p>
            </section>

            <section className="bg-red-500/10 p-6 rounded-2xl border border-red-500/20">
              <p className="text-red-500 font-bold leading-relaxed">
                ⚠️ Warning: Account deletion is permanent and irreversible. All your in-app points balance, tasks, budget logs, focus sessions, streak progress, and personal data will be permanently removed from our servers.
              </p>
            </section>

            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Step-by-Step Guide</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-background/50 p-4 rounded-xl border border-card-border">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">1</span>
                  <div>
                    <h4 className="font-bold text-lg">Open Your Email App</h4>
                    <p className="text-foreground/70 mt-1">Use the same email address that is registered with your To Do It account.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start bg-background/50 p-4 rounded-xl border border-card-border">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">2</span>
                  <div>
                    <h4 className="font-bold text-lg">Send Email To</h4>
                    <p className="text-primary font-semibold mt-1">support@solvextechnology.in</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-background/50 p-4 rounded-xl border border-card-border">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">3</span>
                  <div>
                    <h4 className="font-bold text-lg">Use This Subject Line</h4>
                    <p className="text-foreground/70 mt-1">Account Deletion Request - To Do It App</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-background/50 p-4 rounded-xl border border-card-border">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">4</span>
                  <div>
                    <h4 className="font-bold text-lg">Include in Email Body</h4>
                    <p className="text-foreground/70 mt-1">Your registered email address and full name linked to the account.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-background/50 p-4 rounded-xl border border-card-border">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">5</span>
                  <div>
                    <h4 className="font-bold text-lg">Wait for Confirmation</h4>
                    <p className="text-foreground/70 mt-1">We will confirm your request and complete the deletion within 7 days.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">📧 Ready-to-Send Email Template</h3>
              <p>Copy and paste this template into your email:</p>
              
              <div className="bg-card p-6 rounded-2xl border border-card-border">
                <h4 className="text-sm font-bold mb-3 text-foreground/50 uppercase tracking-wider">Email Template</h4>
                <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-sm text-foreground/80 leading-relaxed">
                  {emailTemplate}
                </pre>
              </div>

              <a
                href={mailtoHref}
                className="mt-6 flex w-full md:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-primary/90 hover:scale-[1.02] shadow-lg shadow-primary/20"
              >
                ✉️ Send Deletion Request Email
              </a>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">What Gets Deleted</h3>
                <p className="text-sm">Upon successful deletion, the following data will be permanently removed:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your registered email address, name, and profile picture</li>
                  <li>Firebase User UID and profile details</li>
                  <li>All saved tasks, descriptions, categories, and times</li>
                  <li>Focus (Pomodoro) sessions and history</li>
                  <li>Budget books (income, expense, amount, category, notes)</li>
                  <li>Points balance, streaks, level progression, and reward history</li>
                  <li>Referral code and all pending/approved referral logs</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">What Is Not Deleted</h3>
                <p className="text-sm">The following may be retained as required by law or for legitimate business purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Anonymized, aggregated app performance data (non-personal)</li>
                  <li>Queued or past point redemption logs for fraud auditing and tax records</li>
                  <li>Strict system protection and anti-abuse / multi-account audit logs</li>
                </ul>
              </section>
            </div>

            <section className="space-y-4 bg-background/50 p-6 rounded-2xl border border-card-border">
              <h3 className="text-xl font-bold text-foreground">⏱️ Deletion Timeline</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-foreground/80">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                  <span>We will acknowledge your request within 24–48 hours</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                  <span>Account deletion will be completed within 7 days of request confirmation</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                  <span>You will receive a confirmation email once deletion is complete</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                  <span>After deletion, you will not be able to recover your account or data</span>
                </li>
              </ul>
            </section>

            <div className="mt-12 pt-8 border-t border-card-border">
              <div className="flex flex-col items-center text-center space-y-4">
                <Mail className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold text-lg">📩 Need help or have questions?</h4>
                  <p className="text-foreground/70 mt-1">Contact us at</p>
                  <a href="mailto:support@solvextechnology.in" className="text-primary font-bold hover:underline block mt-2">
                    support@solvextechnology.in
                  </a>
                </div>
              </div>
              
              <div className="mt-12 flex flex-col items-center gap-4 text-sm text-foreground/60">
                <div className="flex flex-wrap justify-center gap-6 font-bold text-primary">
                  <Link href="/products/todoit/privacy-policy" className="hover:underline flex items-center gap-1">🔒 Privacy Policy</Link>
                  <Link href="/products/todoit/terms" className="hover:underline flex items-center gap-1">📋 Terms of Use</Link>
                  <Link href="/products" className="hover:underline flex items-center gap-1">🏠 Home</Link>
                </div>
                <p className="mt-4">© 2026 To Do It. All rights reserved. | <Link href="/products/todoit/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link href="/products/todoit/terms" className="hover:underline">Terms of Use</Link></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
