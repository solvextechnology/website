import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Solutions",
  description: "Enterprise-grade digital solutions, CRM, ERP, and business automation platforms built to scale your operations.",
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
