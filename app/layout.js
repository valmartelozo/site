import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VMARTELOZO Global Accounting LLC | US Business Formation & Tax Services",
  description: "Specialized accounting, tax, and administrative services in the United States. Expert guidance for Brazilians starting businesses in the USA. IRS compliance, LLC formation, and financial management.",
  keywords: "US accounting, LLC formation, tax services, Brazilian entrepreneurs, IRS compliance, Florida accounting, business formation USA",
  openGraph: {
    title: "VMARTELOZO Global Accounting LLC",
    description: "Entrepreneurship in the USA safely and without tax risks. Specialized services for Brazilians doing business in America.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-[120px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
