import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Solvex Technology",
};

export default function Terms() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-bold mb-8">Terms of <span className="text-gradient">Service</span></h1>
        <div className="glass-card p-10 rounded-3xl border border-card-border space-y-8">
          <p className="text-foreground/80 font-medium">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">1. Agreement to Terms</h2>
            <p className="text-foreground/70 leading-relaxed">
              By accessing our website and utilizing the services provided by Solvex Technology (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you (&quot;Client&quot;, &quot;User&quot;) agree to be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">2. Services Provided</h2>
            <p className="text-foreground/70 leading-relaxed">
              Solvex Technology offers digital solutions including, but not limited to, web development, mobile app development, branding, digital automation, and business consultancy. The specific scope, deliverables, and timeline of any project will be outlined in a separate Statement of Work (SOW) or formal agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">3. Client Responsibilities</h2>
            <p className="text-foreground/70 leading-relaxed">
              The Client agrees to provide timely access to necessary resources, materials, content, and feedback required for the successful completion of the project. Delays caused by the Client may result in corresponding extensions to project timelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">4. Payment and Billing</h2>
            <ul className="list-disc list-inside text-foreground/70 space-y-2">
              <li>A non-refundable deposit (typically 30-50%) is required before project commencement, unless otherwise specified.</li>
              <li>Final deliverables, source code, and live deployment will only be handed over upon receipt of full payment.</li>
              <li>Invoices are due within 7 days of issuance. Late payments may incur a penalty fee.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">5. Intellectual Property</h2>
            <p className="text-foreground/70 leading-relaxed">
              Upon final payment, the Client will own the copyright to the final approved deliverables. However, Solvex Technology retains the right to use the completed project in our portfolio, case studies, and marketing materials unless a Non-Disclosure Agreement (NDA) states otherwise. We also retain ownership of any pre-existing code libraries or proprietary tools used during development.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">6. Revisions and Approvals</h2>
            <p className="text-foreground/70 leading-relaxed">
              Projects include a predetermined number of revision rounds as specified in the project agreement. Additional revisions or requests outside the original scope of work will be billed at our standard hourly rate.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">7. Limitation of Liability</h2>
            <p className="text-foreground/70 leading-relaxed">
              Solvex Technology shall not be held liable for any indirect, incidental, or consequential damages, including loss of profits, data, or business opportunities, arising out of the use or inability to use our services. Our maximum liability shall not exceed the total amount paid by the Client for the specific project in question.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">8. Termination</h2>
            <p className="text-foreground/70 leading-relaxed">
              Either party may terminate the agreement with written notice if the other party breaches these terms. Upon termination, the Client shall pay for all work completed up to the date of termination. Deposits are non-refundable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">9. Governing Law</h2>
            <p className="text-foreground/70 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">10. Changes to Terms</h2>
            <p className="text-foreground/70 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Continued use of our services constitutes acceptance of the updated terms.
            </p>
          </section>

          <div className="pt-6 border-t border-card-border">
            <p className="text-foreground/70">
              If you have any questions about these Terms, please contact us at <a href="mailto:support@solvextechnology.in" className="text-primary hover:underline">support@solvextechnology.in</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
