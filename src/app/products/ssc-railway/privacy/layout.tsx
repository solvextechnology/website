import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - SSC Railway Exam Guide",
  description:
    "Read the SSC Railway Exam Guide Privacy Policy, including what data is collected, how it is used, third-party services, retention, security, and user privacy rights.",
  alternates: {
    canonical: "/products/ssc-railway/privacy",
  },
  openGraph: {
    title: "Privacy Policy - SSC Railway Exam Guide",
    description:
      "Transparent privacy information for SSC Railway Exam Guide users, app-store reviewers, and compliance teams.",
    url: "/products/ssc-railway/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
