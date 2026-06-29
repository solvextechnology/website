import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Deletion - SSC Railway Exam Guide",
  description:
    "Learn how to delete your SSC Railway Exam Guide account, what data is removed, what may be retained for legal reasons, and how to submit a manual deletion request.",
  alternates: {
    canonical: "/products/ssc-railway/delete-account",
  },
  openGraph: {
    title: "Account Deletion - SSC Railway Exam Guide",
    description:
      "Complete account deletion and data-erasure instructions for SSC Railway Exam Guide users.",
    url: "/products/ssc-railway/delete-account",
  },
};

export default function AccountDeletionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
