import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ganesh Lonare",
  description:
    "",
  generator: "Next.js",
  applicationName: "Ganesh Lonare",
  keywords: [
    "software developer",
    "full-stack developer",
    "backend developer",
    "frontend developer",
    "DevOps",
    "DevOps engineer",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "SQL",
    "NoSQL",
    "MERN stack",
    "Next.js",
    "Prisma",
    "Turborepo",
    "hackathons",
    "e-commerce development",
    "adaptive retail",
    "smart solutions",
    "system design",
    "portfolio",
    "web developer",
    "backend engineer",
    "API development",
    "open-source",
    "cloud infrastructure",
    "GitHub",
    "Kubernetes",
    "Docker",
    "software engineering",
    "DSA",
    "Goldman Sachs internship",
    "coding challenges",
    "CodeChef",
    "LeetCode",
    "placement preparation",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Ganesh Lonare",
    description:
      "",
    url: "https://www.Ganeshlonare.me/",
    siteName: "www.Ganeshlonare.me",
    images: [
      {
        url: " ",
        width: 1200,
        height: 630,
        alt: "Ganesh Lonare-Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh Lonare-Developer",
    description:
      "I'm currently pursuing my B.tech in Electronics and Computer Engineering at Sanjivani College of Engineering, Kopargaon, specializing in full-stack web development.",
    creator: "Ganesh Lonare",
    creatorId: " ",
    images: [
      " ",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
