import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/footer";

import Image from "next/image";
import Reviews from "./gallery/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>Zees Cartoons</h1>
          {/* <h1>Zee&apos;s Cartoons</h1> */}
        </header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/AddCartoon">Add Cartoon</Link>
          <Link href="/gallery">Gallery</Link>
          {/* <Link href="/gallery">Gallery</Link> */}
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
