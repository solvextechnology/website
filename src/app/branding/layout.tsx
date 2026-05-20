import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding & Rebranding",
  description: "Premium branding and rebranding services. Logo design, brand identity, and social media branding for startups and businesses.",
};

export default function BrandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
