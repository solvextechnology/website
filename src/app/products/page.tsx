"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Rocket, Gamepad2 } from "lucide-react";

const products = [
  {
    title: "BTC Reward App",
    category: "Crypto & FinTech",
    desc: "A fully automated cryptocurrency reward and earning application. Users can complete tasks, participate in airdrops, and earn BTC directly into their wallets with a seamless, highly secure UI.",
    link: "https://your-btc-app-link.com",
    image: "/images/product_btc.png",
    status: "Live",
    icon: <Rocket className="w-5 h-5 text-primary" />
  },
  {
    title: "Upcoming Mobile Game",
    category: "Gaming",
    desc: "An immersive, next-generation mobile gaming experience. Currently in active development, this game will feature stunning graphics, engaging mechanics, and a vibrant virtual economy.",
    link: "#",
    image: "/images/product_game.png",
    status: "In Development",
    icon: <Gamepad2 className="w-5 h-5 text-secondary" />
  }
];

export default function Products() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our <span className="text-gradient">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Explore the innovative in-house applications, platforms, and games developed entirely by the Solvex Technology team.
          </motion.p>
        </div>

        {/* Product List */}
        <div className="space-y-16">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border border-card-border p-6 md:p-8 flex flex-col lg:flex-row gap-8 lg:items-center hover:border-primary/50 transition-colors"
            >
              {/* Product Image */}
              <div className="relative w-full lg:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden border border-card-border/50">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md bg-background/80 border ${product.status === 'Live' ? 'border-green-500/50 text-green-500' : 'border-yellow-500/50 text-yellow-500'}`}>
                    <span className={`w-2 h-2 rounded-full ${product.status === 'Live' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></span>
                    {product.status}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-card-border text-xs font-semibold text-foreground/70 uppercase tracking-widest">
                  {product.icon} {product.category}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold">{product.title}</h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  {product.desc}
                </p>
                
                <div className="pt-4">
                  {product.link !== "#" ? (
                    <a 
                      href={product.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors shadow-[0_0_20px_var(--primary-glow)]"
                    >
                      Visit Website <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="inline-flex items-center gap-2 px-8 py-4 glass-card text-foreground/50 rounded-full font-bold cursor-not-allowed border border-card-border"
                    >
                      Coming Soon...
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
