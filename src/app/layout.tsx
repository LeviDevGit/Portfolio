import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });
export const nunito = Nunito({ subsets: ["latin"], weight: ["600"] });

export const metadata: Metadata = {
  title: "Levi Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`bg-neutral-50 flex justify-center text-gray-900 my-10 ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
