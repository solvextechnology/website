import { Metadata } from "next";

export const metadata: Metadata = { title: "Cookie Policy | Solvex Technology" };

export default function Cookies() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-bold mb-8">Cookie <span className="text-gradient">Policy</span></h1>
        <div className="glass-card p-10 rounded-3xl border border-card-border space-y-6">
          <p className="text-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-bold">1. What Are Cookies</h2>
          <p className="text-foreground/70">Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to site owners.</p>
          <h2 className="text-xl font-bold">2. How We Use Cookies</h2>
          <p className="text-foreground/70">We use cookies to understand how you interact with our website, remember your preferences, and improve your overall experience. We do not use cookies to collect personally identifiable information.</p>
          <h2 className="text-xl font-bold">3. Managing Cookies</h2>
          <p className="text-foreground/70">You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.</p>
        </div>
      </div>
    </div>
  );
}
