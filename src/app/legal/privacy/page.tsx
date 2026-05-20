import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Solvex Technology",
};

export default function Privacy() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-bold mb-8">Privacy <span className="text-gradient">Policy</span></h1>
        <div className="glass-card p-10 rounded-3xl border border-card-border space-y-6">
          <p className="text-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-bold">1. Data Collection</h2>
          <p className="text-foreground/70">We collect information that you provide directly to us when you fill out a form, request support, or communicate with us.</p>
          <h2 className="text-xl font-bold">2. Use of Information</h2>
          <p className="text-foreground/70">We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Solvex Technology and our users.</p>
        </div>
      </div>
    </div>
  );
}
