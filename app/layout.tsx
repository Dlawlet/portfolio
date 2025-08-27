import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ir. Florian N.Y.",
  description:
    "Welcome to my portfolio! I am a passionate Software Engineer and DData/ML Enthusiast.",
  keywords: ["Frontend Developer", "Web Developer", "React Developer"],
  authors: [{ name: "Florian Noussa Yao" }],
  creator: "Florian Noussa Yao",
  openGraph: {
    title: "Florian N.Y. - Software Engineer Portfolio",
    description:
      "Passionate Software Engineer and Data/ML Enthusiast. Explore my projects and frontend development expertise.",
    url: "https://your-domain.com",
    siteName: "Florian Noussa Yao - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Florian N.Y. - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Analytics />
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
