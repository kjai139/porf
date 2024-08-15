import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background text-foreground font-sans antialiased", inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dTheme" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        
        </body>
    </html>
  );
}
