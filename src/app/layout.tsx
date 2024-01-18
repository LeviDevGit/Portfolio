import type { Metadata } from "next";
import "../_styles/globals.css";
import { poppins } from "../_styles/fonts";

export const metadata: Metadata = {
  title: "Levi Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-neon-white flex justify-center mt-10 ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
