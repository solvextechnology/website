"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, ShieldCheck, FileText, Trash2, Download, BarChart3, Brain, Clock, Languages, CheckCircle2, Target, Smartphone, Sparkles } from "lucide-react";

export default function SSCRailwayProductPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background relative overflow-hidden">
      
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/10 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation */}
        <div className="mb-12">
          <Link href="/products" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-sm text-primary font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" /> SSC + Railway Preparation App
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              SSC Railway <br />
              <span className="text-gradient">Exam Guide</span>
            </h1>
            
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
              A polished exam-preparation app built for serious SSC and Railway aspirants. Practice CBT-style mock tests, revise chapter-wise questions, track weak areas, and keep your learning data under clear privacy controls.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/95 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1">
                <Download className="w-5 h-5" /> Request App Access
              </Link>
              <Link href="#compliance" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-card-border rounded-xl font-bold hover:border-primary/50 hover:text-primary transition-all">
                <ShieldCheck className="w-5 h-5" /> View Legal Pages
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 max-w-xl">
              {[
                ["CBT", "Mock interface"],
                ["2 Lang", "Hindi + English"],
                ["24/7", "Self practice"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-card-border bg-card/40 p-4">
                  <div className="text-2xl font-extrabold text-primary">{value}</div>
                  <div className="text-xs text-foreground/60">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl overflow-hidden glass-card border border-card-border p-8 flex items-center justify-center bg-card/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
              <Image 
                src="/images/ssc-logo.png" 
                alt="SSC Railway Exam Guide Logo" 
                width={400} 
                height={400} 
                className="object-contain hover:scale-105 transition-transform duration-700 relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "CBT Mock Tests",
              desc: "Timed test flows designed around the feel of computer-based competitive exams, with instant review after submission.",
              icon: <Clock className="w-8 h-8 text-primary" />
            },
            {
              title: "Multilingual Q-Bank",
              desc: "Practice important SSC and Railway topics in Hindi and English with clear explanations for revision.",
              icon: <Languages className="w-8 h-8 text-secondary" />
            },
            {
              title: "Smart Progress Tracking",
              desc: "Understand accuracy, time spent, skipped questions, and weak chapters so revision becomes measurable.",
              icon: <BarChart3 className="w-8 h-8 text-emerald-500" />
            }
          ].map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                {feat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feat.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Learning Experience */}
        <div className="mb-32">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-bold mb-4">
              <Sparkles className="w-5 h-5" /> Built for daily preparation
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">Everything an aspirant needs before the exam day.</h2>
            <p className="text-lg text-foreground/65 leading-relaxed">
              The app is structured for repeated practice: quick quizzes for revision, full-length mocks for stamina, and analytics that make the next study session obvious.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Exam-wise learning paths",
                desc: "Organize practice for SSC, RRB NTPC, Group D, ALP, and general aptitude preparation without mixing unrelated material.",
                icon: <Target className="w-6 h-6 text-primary" />,
              },
              {
                title: "Question review and bookmarks",
                desc: "Save difficult questions, revisit attempted answers, and build a personal revision queue before important dates.",
                icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
              },
              {
                title: "Adaptive insights",
                desc: "Performance views highlight weak subjects, slow topics, and accuracy patterns so students can stop guessing what to study.",
                icon: <Brain className="w-6 h-6 text-secondary" />,
              },
              {
                title: "Mobile-first experience",
                desc: "Lightweight screens, readable typography, and fast navigation keep practice comfortable on budget Android phones.",
                icon: <Smartphone className="w-6 h-6 text-accent" />,
              },
            ].map((item) => (
              <div key={item.title} className="glass-card border border-card-border rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & Compliance Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="compliance"
          className="border-t border-card-border pt-20 scroll-mt-28"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold mb-4">Legal & Compliance</h2>
            <p className="text-foreground/60">
              Complete policy pages for users, app stores, and compliance reviewers. These pages explain data use, app rules, and account deletion in plain language.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Link href="/products/ssc-railway/privacy" className="group glass-card p-6 rounded-2xl border border-card-border hover:border-primary/40 flex flex-col items-center text-center transition-all">
              <ShieldCheck className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Privacy Policy</h3>
              <p className="text-sm text-foreground/60">How we collect and protect your data</p>
            </Link>

            <Link href="/products/ssc-railway/terms" className="group glass-card p-6 rounded-2xl border border-card-border hover:border-primary/40 flex flex-col items-center text-center transition-all">
              <FileText className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Terms & Conditions</h3>
              <p className="text-sm text-foreground/60">Rules and guidelines for using the app</p>
            </Link>

            <Link href="/products/ssc-railway/delete-account" className="group glass-card p-6 rounded-2xl border border-card-border hover:border-red-500/40 flex flex-col items-center text-center transition-all">
              <Trash2 className="w-10 h-10 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2 text-red-400">Account Deletion</h3>
              <p className="text-sm text-foreground/60">Instructions to permanently remove your data</p>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
