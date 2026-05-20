import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Solvex Technology",
};

export default function Terms() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-bold mb-8">Terms of <span className="text-gradient">Service</span></h1>
        <div className="glass-card p-10 rounded-3xl border border-card-border space-y-6">
          <p className="text-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-bold">1. Agreement to Terms</h2>
          <p className="text-foreground/70">By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, then you do not have permission to access the service.</p>
          <h2 className="text-xl font-bold">2. Intellectual Property</h2>
          <p className="text-foreground/70">The Service and its original content, features, and functionality are and will remain the exclusive property of Solvex Technology and its licensors.</p>
        </div>
      </div>
    </div>
  );
}
