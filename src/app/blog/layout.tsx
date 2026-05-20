import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest insights, tutorials, and news about web development, business growth, and digital trends.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
