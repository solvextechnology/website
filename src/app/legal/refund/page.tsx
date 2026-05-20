import { Metadata } from "next";

export const metadata: Metadata = { title: "Refund Policy | Solvex Technology" };

export default function Refund() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-bold mb-8">Refund <span className="text-gradient">Policy</span></h1>
        <div className="glass-card p-10 rounded-3xl border border-card-border space-y-6">
          <p className="text-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-bold">1. General Policy</h2>
          <p className="text-foreground/70">All services provided by Solvex Technology are subject to a formal agreement. Refunds are issued on a case-by-case basis depending on the scope and status of the project.</p>
          <h2 className="text-xl font-bold">2. Eligibility for Refund</h2>
          <p className="text-foreground/70">Refunds may be granted if work has not commenced, if there has been a significant failure to deliver agreed services, or if mutually agreed upon in writing.</p>
          <h2 className="text-xl font-bold">3. Non-Refundable Items</h2>
          <p className="text-foreground/70">Domain registrations, hosting fees, and third-party software licenses are non-refundable once purchased on behalf of the client.</p>
          <h2 className="text-xl font-bold">4. Contact Us</h2>
          <p className="text-foreground/70">For any refund requests, please contact <a href="mailto:support@solvextechnology.in" className="text-primary hover:underline">support@solvextechnology.in</a>.</p>
        </div>
      </div>
    </div>
  );
}
