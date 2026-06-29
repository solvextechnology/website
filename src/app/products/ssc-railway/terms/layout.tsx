import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - SSC Railway Exam Guide",
  description:
    "Read the SSC Railway Exam Guide Terms and Conditions covering educational purpose, user responsibilities, subscriptions, acceptable use, disclaimers, and contact information.",
  alternates: {
    canonical: "/products/ssc-railway/terms",
  },
  openGraph: {
    title: "Terms and Conditions - SSC Railway Exam Guide",
    description:
      "Full terms for using the SSC Railway Exam Guide mobile preparation app by Solvex Technology.",
    url: "/products/ssc-railway/terms",
  },
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
