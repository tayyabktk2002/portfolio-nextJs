import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tayyab Khattak | Full Stack Developer Portfolio",
  description:
    "Portfolio of Tayyab Ur Rehman Khattak — Full Stack Developer experienced in React.js, Next.js, Node.js, Express, and MongoDB. Building responsive, user-friendly, and scalable web applications.",
  keywords: [
    "Tayyab Khattak",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Tayyab Ur Rehman Khattak" }],
  openGraph: {
    title: "Tayyab Khattak | Full Stack Developer",
    description:
      "Showcasing projects and skills of Tayyab Khattak — React, Node.js, MongoDB, and Next.js developer.",
    url: "https://tayyabkhattak.vercel.app", 
    siteName: "Tayyab Khattak Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 600,
        alt: "Tayyab Khattak Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
