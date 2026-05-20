import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Solvex Technology's vision, mission, and the global team of experts delivering premium digital solutions.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
