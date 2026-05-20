import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Solvex Technology",
  description: "Insights, tips, and news on digital growth, web development, and business strategy from Solvex Technology.",
};

const posts = [
  {
    title: "How to Build a Scalable Web App in 2025",
    date: "May 15, 2025",
    category: "Web Development",
    excerpt: "Explore the best practices for building scalable, high-performance web applications using modern frameworks like Next.js and Node.js.",
  },
  {
    title: "Top 5 Branding Strategies for Startups",
    date: "May 8, 2025",
    category: "Branding",
    excerpt: "A strong brand identity is the foundation of every successful startup. Here are the top 5 strategies to establish your brand.",
  },
  {
    title: "Digital Automation: Save Time & Scale Faster",
    date: "April 30, 2025",
    category: "Automation",
    excerpt: "Discover how businesses are using digital automation to cut operational costs and scale their revenue without increasing headcount.",
  },
];

const categoryColors: Record<string, string> = {
  "Web Development": "bg-primary/10 text-primary",
  "Branding": "bg-secondary/10 text-secondary",
  "Automation": "bg-accent/10 text-accent",
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
          {posts.map((post, i) => (
            <article key={i} className="glass-card rounded-3xl p-6 border border-card-border hover:border-primary/50 transition-colors flex flex-col">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full self-start mb-4 ${categoryColors[post.category] ?? "bg-card text-foreground"}`}>
                {post.category}
              </span>
              <h2 className="text-xl font-bold mb-3 leading-snug">{post.title}</h2>
              <p className="text-foreground/70 text-sm leading-relaxed flex-1">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-foreground/50">{post.date}</span>
                <button className="text-primary font-semibold text-sm hover:underline">Read more →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
