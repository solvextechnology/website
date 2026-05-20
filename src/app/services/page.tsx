import Link from "next/link";
import Image from "next/image";
import { Code, Smartphone, Briefcase, Server, TrendingUp, Paintbrush, Bitcoin, Zap, Lightbulb, RefreshCw, ArrowRight } from "lucide-react";

const services = [
  {
    slug: "web-development",
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Website Development",
    desc: "Custom, responsive, and high-performance websites built with modern technologies like React, Next.js, and Node.js. From landing pages to full e-commerce platforms.",
    color: "bg-primary/10",
  },
  {
    slug: "mobile-app",
    icon: <Smartphone className="w-8 h-8 text-secondary" />,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps (iOS & Android) with seamless UX, real-time features, push notifications, and scalable backend architecture.",
    color: "bg-secondary/10",
  },
  {
    slug: "business-solutions",
    icon: <Briefcase className="w-8 h-8 text-accent" />,
    title: "Business Management Solutions",
    desc: "Custom ERP, CRM, and project management systems tailored to your business needs. Automate workflows, manage teams, and gain full operational visibility.",
    color: "bg-accent/10",
  },
  {
    slug: "business-consultancy",
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Business Consultancy",
    desc: "Expert guidance on business strategy, market entry, digital transformation, and operational efficiency. We help you make informed decisions that drive real growth.",
    color: "bg-primary/10",
  },
  {
    slug: "growth-strategy",
    icon: <TrendingUp className="w-8 h-8 text-secondary" />,
    title: "Business Growth Strategy",
    desc: "Data-driven marketing, SEO, and growth hacking strategies designed to acquire new customers, increase conversions, and maximize your revenue potential.",
    color: "bg-secondary/10",
  },
  {
    slug: null,
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    title: "Startup & Business Ideas",
    desc: "Got an idea but don't know where to start? We help validate your concept, build your MVP, and guide you from idea to a fundable, scalable business.",
    color: "bg-accent/10",
  },
  {
    slug: null,
    icon: <Paintbrush className="w-8 h-8 text-primary" />,
    title: "Branding & Rebranding",
    desc: "Complete brand identity creation — logo design, color palette, typography, brand guidelines, and social media kits that make your business unforgettable.",
    color: "bg-primary/10",
  },
  {
    slug: "digital-automation",
    icon: <Zap className="w-8 h-8 text-secondary" />,
    title: "Digital Business Automation",
    desc: "Streamline repetitive tasks and complex workflows using intelligent automation tools, AI integrations, and custom APIs — so you can focus on growth.",
    color: "bg-secondary/10",
  },
  {
    slug: null,
    icon: <Server className="w-8 h-8 text-accent" />,
    title: "Online Earning Platforms",
    desc: "Build affiliate programs, referral systems, multi-level commission networks, and monetization platforms with secure payment gateways and real-time dashboards.",
    color: "bg-accent/10",
  },
  {
    slug: null,
    icon: <Bitcoin className="w-8 h-8 text-primary" />,
    title: "Crypto & BTC Reward Platforms",
    desc: "Custom cryptocurrency reward, airdrop, faucet, and mining simulation platforms with wallet integration, automated payouts, and secure user dashboards.",
    color: "bg-primary/10",
  },
  {
    slug: "custom-software",
    icon: <RefreshCw className="w-8 h-8 text-secondary" />,
    title: "Custom Software Solutions",
    desc: "Bespoke software tailored to your exact business requirements — from internal tools and SaaS platforms to complex enterprise systems built to scale.",
    color: "bg-secondary/10",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-16">
            End-to-end digital solutions designed to launch, scale, and automate your business in the modern digital world.
          </p>

          {/* Hero Image */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden glass-card p-2 mb-20 border border-card-border">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image 
                src="/images/services_hero.png" 
                alt="Digital Services Overview" 
                fill 
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const cardContent = (
              <>
                <div className={`mb-6 p-4 rounded-2xl ${service.color} inline-block group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className={`text-foreground/70 leading-relaxed ${service.slug ? 'mb-6' : ''}`}>{service.desc}</p>
                {service.slug && (
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                )}
              </>
            );

            const className = "glass-card p-8 rounded-3xl border border-card-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 block";

            if (service.slug) {
              return (
                <Link
                  key={idx}
                  href={`/services/${service.slug}`}
                  className={className}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                key={idx}
                className={className}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
