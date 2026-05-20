import { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer | Solvex Technology" };

export default function Disclaimer() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-bold mb-8"><span className="text-gradient">Disclaimer</span></h1>
        <div className="glass-card p-10 rounded-3xl border border-card-border space-y-6">
          <p className="text-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-bold">1. No Warranties</h2>
          <p className="text-foreground/70">The information provided on this website is for general informational purposes only. Solvex Technology makes no warranties, expressed or implied, about the completeness, accuracy, or reliability of any information on this site.</p>
          <h2 className="text-xl font-bold">2. External Links</h2>
          <p className="text-foreground/70">Our website may contain links to third-party websites. These links are provided for your convenience. Solvex Technology has no control over the content of those sites and accepts no responsibility for them.</p>
          <h2 className="text-xl font-bold">3. Professional Advice</h2>
          <p className="text-foreground/70">Content on this website does not constitute professional legal, financial, or business advice. Always consult a qualified professional before making business decisions.</p>
        </div>
      </div>
    </div>
  );
}
