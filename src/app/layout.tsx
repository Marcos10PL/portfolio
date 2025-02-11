import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import { Roboto_Slab } from "next/font/google";
import Footer from "@/components/footer";
import ButtonTop from "@/components/button-top";

const robotoSlab = Roboto_Slab({
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Marek Kramarczyk",
  description: "Strona portfolio - Marek Kramarczyk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${robotoSlab.className} text-slate-300`}>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
        <ButtonTop />
      </body>
    </html>
  );
}
