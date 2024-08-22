import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/providers";

const inter = Inter({ 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simon Yu",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en" className="dTheme">
      <body className={`min-h-screen bg-background text-foreground antialiased", ${inter.className}`}>
        <Providers>
          {children}
        </Providers>
        
        </body>
    </html>
  </>
  );
}
