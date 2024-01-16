import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Levi Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-neon-white flex justify-center text-gray-900 my-10 ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
