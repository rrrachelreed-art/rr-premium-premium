import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rachel Reed Art",
  description: "A bold, clean, and aesthetic portfolio website for Rachel Reed’s art and services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black max-w-5xl mx-auto p-6">
        <header className="mb-10">
          <h1 className="text-4xl font-bold">Rachel Reed Art</h1>
          <nav className="mt-4 flex gap-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/products" className="hover:underline">Products</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/sales" className="hover:underline">Sales</a>
            <a href="/rentals" className="hover:underline">Rentals</a>
            <a href="/cars" className="hover:underline">Cars</a>
            <a href="/jobs" className="hover:underline">Jobs</a>
            <a href="/contact" className="hover:underline">Contact

