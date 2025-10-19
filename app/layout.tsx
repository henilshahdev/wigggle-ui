import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wigggle UI",
  description:
    "A beautiful collection of copy-and-paste widgets for your next project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col max-sm:text-center">
            <SiteHeader />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
