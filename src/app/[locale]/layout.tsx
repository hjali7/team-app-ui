import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server'; // Make sure this is 'next-intl/server'
import { GeistSans } from "geist/font/sans";
import { Vazirmatn } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ['latin', 'arabic'],
  display: 'swap',
  variable: '--font-vazirmatn',
});

export const metadata: Metadata = {
  title: "Task Management App",
  description: "A modern, Notion-inspired task management web application.",
};

// --- 1. FIX HERE: Revert back to using Promise ---
interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ // <-- This was correct
    locale: string;
  }>;
}

export default async function RootLayout({
  children,
  params, // <-- 2. FIX HERE: Revert back to this
}: Readonly<RootLayoutProps>) {
  
  // --- 3. FIX HERE: Await the params to get locale ---
  const { locale } = await params; 

  // --- 4. THE REAL FIX: Pass the locale into getMessages ---
  const messages = await getMessages({locale});

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${vazirmatn.variable} antialiased font-sans`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}