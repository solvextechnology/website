import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Trash2, ArrowRight, Sparkles, Target, Mic, Zap, BookOpen, Trophy, FileText, ArrowUpRight, Play, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "To Do It Hub | Solvex Technology",
  description: "Explore To Do It — the gamified productivity, deep-focus Pomodoro, personal budgeting, and daily tasks companion app.",
};

const portals = [
  {
    title: "Privacy Center",
    desc: "Learn how we protect your Firebase synced tasks, hardware mic permissions, and Google ID credentials in full compliance.",
    href: "/products/todoit/privacy-policy",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "hover:border-emerald-500/50 hover:text-emerald-400 group-hover:bg-emerald-500/10 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]",
    iconColor: "text-emerald-400 bg-emerald-500/5 border-emerald-500/10"
  },
  {
    title: "Terms & Conditions",
    desc: "Understand app regulations, points gamification conversion limits, daily task quotas, and anti-abuse referral verification.",
    href: "/products/todoit/terms",
    icon: <FileText className="w-6 h-6" />,
    color: "hover:border-primary/50 hover:text-primary group-hover:bg-primary/10 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)]",
    iconColor: "text-primary bg-primary/5 border-primary/10"
  },
  {
    title: "Data Deletion Guide",
    desc: "Need to start fresh? View the transparent step-by-step procedure to permanently wipe your profile and in-app logs from our servers.",
    href: "/products/todoit/delete-account",
    icon: <Trash2 className="w-6 h-6" />,
    color: "hover:border-red-500/50 hover:text-red-400 group-hover:bg-red-500/10 hover:shadow-[0_10px_30px_rgba(239,68,68,0.15)]",
    iconColor: "text-red-400 bg-red-500/5 border-red-500/10"
  }
];

export default function ToDoItPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-background to-background relative overflow-hidden">
      
      {/* Abstract Glowing Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="w-4 h-4" /> Next-Gen Productivity
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Master Your Day With <span className="text-gradient">To Do It</span>
            </h1>
            
            <p className="text-xl text-foreground/75 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              A comprehensive gamified task engine, deep Pomodoro timer, voice control, and expense manager designed to streamline your lifestyle and reward daily achievements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Link href="#download" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300">
                <Download className="w-5 h-5" /> Download App
              </Link>
              <Link href="#features" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-card hover:bg-white/5 font-bold text-lg transition-all duration-300 hover:border-primary/30 group">
                <Play className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" /> See Features
              </Link>
            </div>
          </div>

          {/* Hero 3D Mockup */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none animate-in fade-in zoom-in-95 duration-1000 delay-300">
            <div className="relative aspect-square w-full group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[3rem] blur-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-700" />
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl glass-card">
                <Image
                  src="/images/todoit_hero_mockup.png"
                  alt="To Do It Application 3D Preview"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid Features */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Core Engine Modules</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">Powering your daily focus, budgeting, and productivity through intelligent gamification.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {/* Large Card: Gamification */}
          <div className="md:col-span-2 md:row-span-2 glass-card rounded-3xl border border-card-border p-10 flex flex-col justify-between group hover:border-secondary/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] group-hover:bg-secondary/20 transition-colors duration-500" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-500">
                <Trophy className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Streak & Points Loop</h3>
              <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
                Get rewarded for staying on track. Earn daily (+20) and weekly (+50) focus streaks, invite friends, and unlock premium tiers. Our token economy ensures every completed task feels like a victory.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-secondary font-semibold">
              <span className="group-hover:translate-x-1 transition-transform">Explore Gamification</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          {/* Medium Card: Smart Task Engine */}
          <div className="md:col-span-1 md:row-span-1 glass-card rounded-3xl border border-card-border p-8 flex flex-col justify-between group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] group-hover:bg-primary/20 transition-colors" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 text-primary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Task Engine</h3>
              <p className="text-foreground/70 leading-relaxed">
                Priority-oriented (Low, Med, High) daily tasks. Watch loyalty ads to expand lists dynamically.
              </p>
            </div>
          </div>

          {/* Medium Card: Deep Pomodoro Focus */}
          <div className="md:col-span-1 md:row-span-1 glass-card rounded-3xl border border-card-border p-8 flex flex-col justify-between group hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[50px] group-hover:bg-yellow-500/20 transition-colors" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-4 text-yellow-500">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Deep Pomodoro Focus</h3>
              <p className="text-foreground/70 leading-relaxed">
                Fuel your focus sessions. Integrated wake-lock countdowns to block distractions and earn points.
              </p>
            </div>
          </div>

          {/* Wide Bottom Card: Budget Ledger */}
          <div className="md:col-span-2 md:row-span-1 glass-card rounded-3xl border border-card-border p-8 flex flex-col justify-center group hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] group-hover:bg-emerald-500/20 transition-colors" />
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-500">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">Personal Budget Ledger</h3>
                <p className="text-foreground/70 leading-relaxed text-lg max-w-lg">
                  Track income and expenses seamlessly. Calculate active balances and generate fully formatted PDF financial ledger books locally on your device.
                </p>
              </div>
            </div>
          </div>

          {/* Square Card: Voice Input */}
          <div className="md:col-span-1 md:row-span-1 glass-card rounded-3xl border border-card-border p-8 flex flex-col justify-between group hover:border-accent/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[50px] group-hover:bg-accent/20 transition-colors" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 text-accent">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Offline Voice-Input</h3>
              <p className="text-foreground/70 leading-relaxed">
                Hands-free productivity. Tap the mic and speak to register tasks instantly using offline Speech-to-Text.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance & Operations Portal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 border-t border-card-border/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Compliance & Data Operations</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">Full transparency regarding user data, safety protocols, and app regulations.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {portals.map((portal, i) => (
            <Link
              key={i}
              href={portal.href}
              className={`glass-card rounded-3xl border border-card-border p-8 transition-all duration-500 hover:-translate-y-2 group flex flex-col justify-between min-h-[260px] ${portal.color}`}
            >
              <div className="space-y-5 relative z-10">
                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl border ${portal.iconColor} transition-colors`}>
                  {portal.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-inherit transition-colors mb-3">
                    {portal.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {portal.desc}
                  </p>
                </div>
              </div>
              
              <div className="pt-6 flex items-center gap-2 text-sm font-bold text-foreground/50 group-hover:text-inherit transition-colors relative z-10">
                Access Portal <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
