import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Vihang Bhavsar | Full Stack Developer",
  description:
    "Full Stack Developer with 2+ years of experience building scalable backend systems, real-time apps, and full-stack solutions with Node.js, NestJS, React, and more.",
  keywords: [
    "Vihang Bhavsar",
    "Full Stack Developer",
    "Node.js Developer",
    "NestJS",
    "Backend Developer",
  ],
  authors: [{ name: "Vihang Bhavsar" }],
  openGraph: {
    title: "Vihang Bhavsar | Full Stack Developer",
    description:
      "Full Stack Developer with 2+ years of experience in Node.js, NestJS, React, and scalable backend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
