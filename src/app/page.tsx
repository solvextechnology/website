"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Smartphone, Briefcase, TrendingUp, Zap, Server, CheckCircle2 } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: <Code className="w-8 h-8 text-primary" />, title: "Web Development", desc: "Custom, responsive websites built with modern technologies like React, Next.js, and Node." },
    { icon: <Smartphone className="w-8 h-8 text-secondary" />, title: "Mobile Apps", desc: "Native and cross-platform mobile applications that provide seamless user experiences." },
    { icon: <Briefcase className="w-8 h-8 text-accent" />, title: "Business Solutions", desc: "Complete digital transformation strategies and management solutions for scaling businesses." },
    { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: "Growth Strategy", desc: "Data-driven marketing and branding strategies to accelerate your online growth." },
    { icon: <Zap className="w-8 h-8 text-secondary" />, title: "Digital Automation", desc: "Streamline operations with custom workflow automation and AI integrations." },
    { icon: <Server className="w-8 h-8 text-accent" />, title: "Custom Software", desc: "Scalable, secure, and robust custom software architectures for complex needs." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-mesh min-h-screen flex items-center">
        <div className="absolute inset-0 bg-background/90 backdrop-blur-3xl z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-8 text-foreground/80">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              Innovating Digital Success
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Transforming Ideas Into <br className="hidden md:block" />
              <span className="text-gradient">Digital Reality</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed mb-10">
              Your trusted partner in digital growth. We build premium web apps, 
              scalable software, and forward-thinking business solutions for startups and enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_var(--primary-glow)] hover:shadow-[0_0_40px_var(--primary-glow)] flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 glass-card text-foreground rounded-full font-semibold text-lg hover:bg-foreground/5 transition-colors flex items-center justify-center gap-2"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 border-y border-card-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-foreground/50 uppercase tracking-widest mb-8">Empowering businesses across industries</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['Web Development', 'Mobile Apps', 'SaaS Platforms', 'E-Commerce', 'Business Automation', 'Brand Identity'].map((area, i) => (
              <span key={i} className="px-5 py-2 rounded-full glass-card text-sm font-medium text-foreground/70 border border-card-border">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose <span className="text-gradient">Solvex?</span></h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Solvex Technology is more than just a development agency. We are a holistic digital partner dedicated to launching, scaling, and automating your business in the modern web era.
              </p>
              <ul className="space-y-4">
                {['End-to-End Digital Transformation', 'Premium UI/UX Design Standards', 'High-Performance & Scalable Architecture', '24/7 Dedicated Expert Support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/about" className="text-primary font-semibold hover:underline flex items-center gap-2">
                  Learn more about our vision <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] w-full rounded-3xl overflow-hidden glass-card p-2"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent rounded-3xl" />
              <Image 
                src="/images/intro_growth.png" 
                alt="Accelerating Business Growth" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-card relative border-y border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core <span className="text-gradient">Expertise</span></h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Comprehensive solutions tailored to elevate your brand and optimize your operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <div className="mb-6 p-4 rounded-2xl bg-background inline-block shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full font-semibold hover:bg-primary hover:text-white transition-all border border-card-border hover:border-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">A glimpse into the innovative solutions we have built for clients worldwide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "BTC Reward Platform", cat: "Crypto", image: "/images/crypto_portfolio.png" },
              { title: "E-Commerce Store", cat: "Web Development", image: "/images/ecommerce_portfolio.png" },
              { title: "Business SaaS", cat: "Software", image: "/images/saas_portfolio.png" },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden border border-card-border hover:border-primary/50 transition-colors group"
              >
                <div className="h-48 relative">
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">{p.cat}</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">{p.title}</h3>
                  <Link href="/portfolio" className="text-primary font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full font-semibold hover:bg-primary hover:text-white transition-all border border-card-border hover:border-primary">
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build the Future?</h2>
          <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
            Join hundreds of visionary businesses who have transformed their ideas into powerful digital realities with Solvex Technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-10 py-5 bg-foreground text-background rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Start Your Project
            </Link>
            <a href="mailto:support@solvextechnology.in" className="px-10 py-5 glass-card rounded-full font-bold text-lg hover:bg-card transition-colors flex items-center justify-center gap-2">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
