import type { Metadata } from "next";
import "@/app/styles/styles.sass";
import { Lato, Open_Sans } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

// heading font
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});

// body font
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Andrew's Blog",
  description: "Andrew's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${openSans.className} ${openSans.variable} ${lato.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
