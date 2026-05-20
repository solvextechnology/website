import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore the innovative digital solutions, websites, and mobile apps built by Solvex Technology for clients globally.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
