import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our comprehensive range of digital services including web development, app development, business consulting, and more.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
