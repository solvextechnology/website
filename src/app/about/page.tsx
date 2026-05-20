"use client";

import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2, Users, Award, Globe } from "lucide-react";

const stats = [
  { label: "Projects Delivered", value: "150+" },
  { label: "Happy Clients", value: "80+" },
  { label: "Years Experience", value: "5+" },
  { label: "Countries Served", value: "10+" },
];

const values = [
  "End-to-End Digital Transformation",
  "Premium UI/UX Design Standards",
  "Scalable & Secure Architecture",
  "Transparent Communication",
  "Agile & On-Time Delivery",
  "24/7 Dedicated Expert Support",
];

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-mesh opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About <span className="text-gradient">Solvex Technology</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-3xl mx-auto"
          >
            We are a team of passionate developers, designers, and strategists dedicated to delivering complete digital growth services for businesses and startups worldwide.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl p-6 text-center border border-card-border"
            >
              <div className="text-4xl font-extrabold text-gradient mb-2">{stat.value}</div>
              <div className="text-foreground/70 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl border border-card-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              To be the most trusted digital partner for businesses globally — enabling every company, regardless of size, to harness the full power of modern technology for sustainable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl border border-card-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              To empower businesses with state-of-the-art digital solutions — from stunning web design to intelligent automation — helping them scale faster, operate smarter, and grow bigger.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose <span className="text-gradient">Us?</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 glass-card p-5 rounded-2xl border border-card-border"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Overview */}
        <div className="text-center glass-card p-12 rounded-3xl border border-card-border">
          <div className="flex justify-center gap-8 mb-6">
            <Users className="w-10 h-10 text-primary" />
            <Award className="w-10 h-10 text-secondary" />
            <Globe className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-2xl font-bold mb-4">A Global Team of Experts</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Our multidisciplinary team spans developers, designers, business consultants, and growth strategists — all united by a single goal: your success.
          </p>
        </div>
      </div>
    </div>
  );
}
