import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Solvex Technology",
  description: "Insights, tips, and news on digital growth, web development, and business strategy from Solvex Technology.",
};

const posts = [
  {
    title: "How to Build a Scalable Web App in 2025",
    href: "/services/web-development",
    date: "May 15, 2025",
    category: "Web Development",
    excerpt: "Explore the best practices for building scalable, high-performance web applications using modern frameworks like Next.js and Node.js.",
    image: "/images/blog_webapp.png",
  },
  {
    title: "Top 5 Branding Strategies for Startups",
    href: "/branding",
    date: "May 8, 2025",
    category: "Branding",
    excerpt: "A strong brand identity is the foundation of every successful startup. Here are the top 5 strategies to establish your brand.",
    image: "/images/blog_branding.png",
  },
  {
    title: "Digital Automation: Save Time & Scale Faster",
    href: "/services/digital-automation",
    date: "April 30, 2025",
    category: "Automation",
    excerpt: "Discover how businesses are using digital automation to cut operational costs and scale their revenue without increasing headcount.",
    image: "/images/blog_automation.png",
  },
];

const categoryColors: Record<string, string> = {
  "Web Development": "bg-primary/10 text-primary",
  Branding: "bg-secondary/10 text-secondary",
  Automation: "bg-accent/10 text-accent",
};

export default function Blog() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Insights, tips, and news on digital growth, technology trends, and business strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="glass-card rounded-3xl overflow-hidden border border-card-border hover:border-primary/50 transition-colors flex flex-col group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full self-start mb-4 ${categoryColors[post.category] ?? "bg-card text-foreground"}`}>
                  {post.category}
                </span>
                <h2 className="text-xl font-bold mb-3 leading-snug">{post.title}</h2>
                <p className="text-foreground/70 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-foreground/50">{post.date}</span>
                  <Link href={post.href} className="text-primary font-semibold text-sm hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
