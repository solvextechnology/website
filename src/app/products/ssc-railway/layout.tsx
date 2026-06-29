import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSC Railway Exam Guide",
  description:
    "SSC Railway Exam Guide by Solvex Technology is a mobile exam-preparation app for SSC and Railway aspirants with mock tests, bilingual practice, analytics, privacy policy, terms, and account deletion information.",
  keywords: [
    "SSC Railway Exam Guide",
    "SSC exam app",
    "Railway exam preparation",
    "RRB mock test",
    "SSC mock test",
    "Solvex Technology",
  ],
  alternates: {
    canonical: "/products/ssc-railway",
  },
  openGraph: {
    title: "SSC Railway Exam Guide",
    description:
      "A focused preparation app for SSC and Railway aspirants with CBT-style mocks, bilingual practice, analytics, and transparent data controls.",
    url: "/products/ssc-railway",
    images: [
      {
        url: "/images/ssc-logo.png",
        width: 512,
        height: 512,
        alt: "SSC Railway Exam Guide app logo",
      },
    ],
  },
};

export default function SSCRailwayLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
