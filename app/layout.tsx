import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Rachel Reed — Services, Real Estate, Cars, Jobs, Products",
  description: "Premium, bold and simple. Explore services, properties, cars, jobs and products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
