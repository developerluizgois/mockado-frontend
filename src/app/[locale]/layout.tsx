import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/ui/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider, useMessages } from "next-intl";

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Mockado",
  description: "Have fictitious yet realistic data for your development tests or other needs.",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
  }) {
   const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={`${open_sans.className}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
