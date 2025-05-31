import type { Metadata } from "next";
import "./../../style/globals.css";
import Nav from "@/components/nav";
import { Roboto_Slab } from "next/font/google";
import Footer from "@/components/footer";
import ButtonTop from "@/components/button-top";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import SwitchLanguage from "@/components/switch-language";

const robotoSlab = Roboto_Slab({
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Marek Kramarczyk",
  description: "Strona portfolio - Marek Kramarczyk",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="pl">
      <body
        className={`${robotoSlab.className} bg-[url("../style/bg.png")] bg-cover bg-center bg-fixed text-slate-300`}
      >
        <NextIntlClientProvider>
          <header>
            <Nav />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
          <ButtonTop />
          <SwitchLanguage />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
