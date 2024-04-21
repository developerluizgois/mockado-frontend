import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/ui/Header";
import { ThemeProvider } from "@/components/theme-provider";

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
  return (
    <html lang={locale}>
      <body className={`${open_sans.className}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <Header />
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
