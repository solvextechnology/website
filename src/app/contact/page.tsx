"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative bg-background">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-mesh opacity-30 z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Let&apos;s discuss how we can help you achieve your digital goals. Reach out to our team of experts today.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-10 rounded-3xl"
        >
          <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Email Us</h3>
                <p className="text-foreground/70 mb-2">For general inquiries and support</p>
                <a
                  href="mailto:support@solvextechnology.in"
                  className="text-primary hover:underline text-lg font-medium"
                >
                  support@solvextechnology.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Call Us</h3>
                <p className="text-foreground/70 mb-2">Mon - Sat, 9:00 AM - 6:00 PM</p>
                <a
                  href="tel:+919311910636"
                  className="text-secondary hover:underline text-lg font-medium"
                >
                  +91 9311910636
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Visit Us</h3>
                <p className="text-foreground/70 text-lg">
                  Kaushalya Bhawan, Sonbarsa,<br />Sitamarhi, Bihar, 843330
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 rounded-3xl overflow-hidden border border-card-border shadow-lg"
        >
          <div className="bg-card px-6 py-4 border-b border-card-border">
            <h2 className="text-lg font-semibold">Find Us on Map</h2>
            <p className="text-foreground/60 text-sm">Kaushalya Bhawan, Sonbarsa, Sitamarhi, Bihar</p>
          </div>
          <iframe
            title="Solvex Technology Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.1234!2d85.4897!3d26.5938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec4d1234567890%3A0xabcdef1234567890!2sSitamarhi%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  );
}
