import type { Metadata } from "next";
import "../style/globals.css";
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
      <body
        className={`${robotoSlab.className} bg-[url("../style/bg.png")] bg-cover bg-center bg-fixed text-slate-300`}
      >
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
