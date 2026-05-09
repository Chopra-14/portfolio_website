import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sathvika Portfolio",
  description:
    "Modern responsive portfolio website built using Next.js, Tailwind CSS, and Framer Motion.",

  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Tailwind CSS",
    "Web Developer",
  ],

  authors: [
    {
      name: "Konakalla Chopra Lakshmi Sathvika",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        {children}
      </body>

    </html>
  );
}