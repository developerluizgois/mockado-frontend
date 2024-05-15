import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/ui/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "@/components/ui/Footer";

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Mockado",
  description: "Have fictitious yet realistic data for your development tests or other needs.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={`${open_sans.className}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
