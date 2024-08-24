import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "@/providers/providers";
import NavBarUI from "@/components/navbar";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['100','200','300','400', '500', '600','700','800','900'] });

export const metadata: Metadata = {
  title: "KeyItem 3D",
  description: "KeyItem 3D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <NavBarUI />
          {children}
        </Providers>
      </body>
    </html>
  );
}
