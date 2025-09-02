import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Rachel Reed Art",
  description: "Bold, aesthetic showcase of Rachel Reed’s art and services",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">{children}</body>
    </html>
  );
}
