import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Trash2, ArrowRight, Sparkles, Target, Mic, Zap, BookOpen, Trophy, ShieldAlert, FileText, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "To Do It Hub | Solvex Technology",
  description: "Explore To Do It — the gamified productivity, deep-focus Pomodoro, personal budgeting, and daily tasks companion app.",
};

const modules = [
  {
    title: "Smart Task Engine",
    desc: "Create priority-oriented (Low, Medium, High) and categorized daily tasks. Watch loyalty ads to expand your lists dynamically.",
    icon: <Target className="w-6 h-6 text-primary" />,
    badge: "Productivity"
  },
  {
    title: "Voice-Input (Offline)",
    desc: "Hands-free productivity. Simply tap the mic and speak to automatically register tasks locally using offline Speech-to-Text.",
    icon: <Mic className="w-6 h-6 text-accent" />,
    badge: "Smart AI"
  },
  {
    title: "Deep Pomodoro Focus",
    desc: "Fuel your focus sessions. Use integrated wake-lock countdowns to block out distractions and earn +10 loyalty points.",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    badge: "Focus"
  },
  {
    title: "Budget Ledger Book",
    desc: "Track income and expenses, calculate active balances, and generate fully formatted PDF financial ledger books locally.",
    icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
    badge: "Finance"
  },
  {
    title: "Streak & Points Loop",
    desc: "Get rewarded for staying on track. Earn daily (+20) and weekly (+50) focus streaks, invite friends, and unlock premium tiers.",
    icon: <Trophy className="w-6 h-6 text-secondary" />,
    badge: "Gamified"
  }
];

const portals = [
  {
    title: "Privacy Center",
    desc: "Learn how we protect your Firebase synced tasks, hardware mic permissions, and Google ID credentials in full compliance.",
    href: "/products/todoit/privacy-policy",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "hover:border-emerald-500/50 hover:text-emerald-400 group-hover:bg-emerald-500/10",
    iconColor: "text-emerald-400 bg-emerald-500/5 border-emerald-500/10"
  },
  {
    title: "Terms & Conditions",
    desc: "Understand app regulations, points gamification conversion limits, daily task quotas, and anti-abuse referral verification.",
    href: "/products/todoit/terms",
    icon: <FileText className="w-6 h-6" />,
    color: "hover:border-primary/50 hover:text-primary group-hover:bg-primary/10",
    iconColor: "text-primary bg-primary/5 border-primary/10"
  },
  {
    title: "Data Deletion Guide",
    desc: "Need to start fresh? View the transparent step-by-step procedure to permanently wipe your profile and in-app logs from our servers.",
    href: "/products/todoit/delete-account",
    icon: <Trash2 className="w-6 h-6" />,
    color: "hover:border-red-500/50 hover:text-red-400 group-hover:bg-red-500/10",
    iconColor: "text-red-400 bg-red-500/5 border-red-500/10"
  }
];

export default function ToDoItPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background relative overflow-hidden">
      
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Hero Section */}
        <div className="glass-card rounded-[32px] border border-card-border p-8 md:p-14 mb-16 relative overflow-hidden flex flex-col md:flex-row gap-10 items-center hover:border-primary/30 transition-all duration-500 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          
          {/* Logo container */}
          <div className="relative shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-[38px] border-2 border-primary/20 bg-white/5 overflow-hidden shadow-2xl p-4 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src="/images/todoit-logo.png"
              alt="To Do It Logo"
              width={160}
              height={160}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          {/* Headline details */}
          <div className="text-center md:text-left flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Flagship Application
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              To Do <span className="text-gradient">It</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/75 leading-relaxed max-w-3xl">
              A comprehensive gamified task engine, Pomodoro timer, voice control, and expense manager designed to streamline your lifestyle and reward daily achievements.
            </p>
          </div>
        </div>

        {/* Feature Modules Grid */}
        <div className="mb-20 space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Core Engine Modules</h2>
            <p className="text-foreground/60 text-lg">Powering your daily focus, budgeting, and productivity</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod, i) => (
              <div 
                key={i}
                className="glass-card rounded-2xl border border-card-border p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-card border border-card-border">
                      {mod.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 bg-card border border-card-border/50 px-2 py-0.5 rounded-md">
                      {mod.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {mod.title}
                  </h3>
                  
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & Operations Portal */}
        <div className="space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Compliance & Data Operations</h2>
            <p className="text-foreground/60 text-lg">Full transparency regarding user data, safety protocols, and regulations</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {portals.map((portal, i) => (
              <Link
                key={i}
                href={portal.href}
                className={`glass-card rounded-[24px] border border-card-border p-6 transition-all duration-500 hover:shadow-xl group flex flex-col justify-between min-h-[220px] ${portal.color}`}
              >
                <div className="space-y-4">
                  <div className={`p-3 rounded-2xl border inline-block ${portal.iconColor} transition-colors`}>
                    {portal.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-inherit transition-colors mb-2">
                      {portal.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {portal.desc}
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 flex items-center gap-1 text-sm font-bold text-primary group-hover:text-inherit">
                  Access Portal <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
