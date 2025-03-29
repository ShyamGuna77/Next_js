import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Learning next js",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex justify-between items-center p-4 bg-cyan-100 shadow-md">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/signin"
                className="text-blue-500 hover:underline"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                href="/signup/about"
                className="text-blue-500 hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className="text-blue-500 hover:underline"
              >
                Users
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
