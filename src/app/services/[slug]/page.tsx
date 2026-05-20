import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

const services: Record<string, {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: string[];
  color: string;
}> = {
  "web-development": {
    title: "Website Development",
    tagline: "Custom, Fast & Beautiful Websites",
    description: "We build custom, responsive, and high-performance websites using modern technologies like React, Next.js, and Node.js. From corporate landing pages to full-scale e-commerce platforms — we craft every pixel with precision.",
    features: ["Custom UI/UX Design", "Mobile-First Responsive Layout", "SEO Optimized Structure", "Fast Loading Speed (Core Web Vitals)", "CMS Integration (WordPress/Headless)", "E-Commerce & Payment Gateway"],
    benefits: ["Increased online visibility", "Higher conversion rates", "Professional brand impression", "Scalable architecture for growth"],
    color: "from-primary/20 to-secondary/10",
  },
  "mobile-app": {
    title: "Mobile App Development",
    tagline: "Native & Cross-Platform Apps",
    description: "We design and develop native iOS and Android apps as well as cross-platform solutions using React Native and Flutter. Our apps are fast, beautiful, and built for real users.",
    features: ["iOS & Android Development", "React Native / Flutter", "Push Notifications", "Offline Support", "Real-time Features", "App Store Deployment"],
    benefits: ["Reach customers on mobile", "Enhanced user engagement", "Faster business processes", "Competitive market advantage"],
    color: "from-secondary/20 to-accent/10",
  },
  "business-solutions": {
    title: "Business Management Solutions",
    tagline: "Custom ERP, CRM & Workflow Tools",
    description: "We build custom business management systems — ERP, CRM, project management, invoicing, and HR tools — tailored precisely to your operational needs. Eliminate inefficiencies and gain full visibility into your business.",
    features: ["Custom ERP Development", "CRM Systems", "HR & Payroll Modules", "Inventory Management", "Reporting & Analytics", "Role-Based Access Control"],
    benefits: ["Streamlined operations", "Reduced manual errors", "Better team collaboration", "Data-driven decision making"],
    color: "from-accent/20 to-primary/10",
  },
  "business-consultancy": {
    title: "Business Consultancy",
    tagline: "Expert Strategy for Real Growth",
    description: "Our experienced business consultants help you navigate challenges, identify opportunities, and create actionable growth strategies. Whether you're a startup or an established enterprise, we guide you to smarter decisions.",
    features: ["Market Research & Analysis", "Business Model Design", "Competitive Analysis", "Revenue Model Optimization", "Risk Assessment", "Digital Strategy Planning"],
    benefits: ["Informed business decisions", "Reduced operational risk", "Faster time to market", "Sustainable growth strategy"],
    color: "from-primary/20 to-accent/10",
  },
  "growth-strategy": {
    title: "Business Growth Strategy",
    tagline: "Data-Driven Revenue Growth",
    description: "We develop comprehensive, data-driven growth strategies to help you acquire more customers, increase conversions, and maximize revenue. From SEO to performance marketing — we cover the full growth funnel.",
    features: ["SEO & Content Strategy", "Paid Advertising (Google/Meta)", "Conversion Rate Optimization", "Email Marketing Funnels", "Social Media Growth", "Analytics & Reporting"],
    benefits: ["More qualified leads", "Higher ROI on marketing spend", "Improved customer retention", "Measurable, trackable results"],
    color: "from-secondary/20 to-primary/10",
  },
  "digital-automation": {
    title: "Digital Business Automation",
    tagline: "Work Smarter, Not Harder",
    description: "Automate repetitive tasks, complex workflows, and business processes using custom APIs, AI integrations, and no-code/low-code platforms. Save time and scale faster without increasing headcount.",
    features: ["Workflow Automation", "API Integration & Development", "AI-Powered Tools", "CRM & Email Automation", "Data Sync & Migration", "Custom Bot Development"],
    benefits: ["Save 20+ hours per week", "Eliminate human errors", "Scale without extra staff", "Faster customer response times"],
    color: "from-accent/20 to-secondary/10",
  },
  "custom-software": {
    title: "Custom Software Solutions",
    tagline: "Bespoke Software Built for You",
    description: "When off-the-shelf software doesn't cut it, we build exactly what you need. From SaaS platforms to internal enterprise tools — our engineers design and develop robust, scalable software from the ground up.",
    features: ["Full-Stack Development", "Cloud Architecture (AWS/GCP)", "Microservices & APIs", "Database Design", "Security & Compliance", "DevOps & CI/CD Pipeline"],
    benefits: ["Exact fit for your needs", "No recurring license fees", "Full ownership of code", "Built to scale with you"],
    color: "from-primary/20 to-secondary/10",
  },
};

type Params = { slug: string };

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Solvex Technology`,
    description: service.description,
  };
}

export default async function ServiceDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`h-48 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-12`}>
          <div className="text-center">
            <p className="text-foreground/60 text-sm font-semibold uppercase tracking-widest mb-2">Service</p>
            <h1 className="text-4xl md:text-5xl font-extrabold">{service.title}</h1>
          </div>
        </div>

        <p className="text-2xl font-semibold text-gradient mb-6">{service.tagline}</p>
        <p className="text-lg text-foreground/70 leading-relaxed mb-14">{service.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          {/* Features */}
          <div className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-xl font-bold mb-6">What&apos;s Included</h2>
            <ul className="space-y-3">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Benefits */}
          <div className="glass-card p-8 rounded-3xl border border-card-border">
            <h2 className="text-xl font-bold mb-6">Key Benefits</h2>
            <ul className="space-y-3">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-card p-10 rounded-3xl border border-card-border">
          <h2 className="text-2xl font-bold mb-3">Interested in {service.title}?</h2>
          <p className="text-foreground/70 mb-6">Get in touch and let&apos;s build something amazing together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors shadow-[0_0_20px_var(--primary-glow)] flex items-center justify-center gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="px-8 py-4 glass-card rounded-full font-bold hover:bg-card transition-colors border border-card-border flex items-center justify-center gap-2">
              ← All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
