import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/toggle-theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cubing Mada",
  description: "Application for cubing at Madagascar",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <header className="fixed top-0 left-0 w-full  z-50 h-16 flex items-center justify-between px-4">
              <div className="flex items-center">
                <SidebarTrigger className="w-8 h-8" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2">
                <Image
                  src="/logo.jpg"
                  alt="logo"
                  width={46}
                  height={46}
                  className="rounded-full"
                />
                <Link
                  href="/"
                  className="hidden sm:inline text-lg font-semibold whitespace-nowrap"
                >
                  Madagascar Association of Cubers
                </Link>
              </div>
              <div className="w-8">
                <ModeToggle />
              </div>
            </header>

            <main className="pt-16  w-full">{children}</main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
