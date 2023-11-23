import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
const nunito = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: "#ffffff" }}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Nextjs Ecommerce website</title>
        <meta
          name="description"
          content="This is a compleate ecommerce website.this website developed by mdarifulislamroni.com"
        />
      </head>
      <body className={nunito.className}>
        <Header />
        <div className="w-full min-h-[700px] bg-color-primary">{children}</div>
        <Footer />
        <Script src="/script.js"></Script>
      </body>
    </html>
  );
}
