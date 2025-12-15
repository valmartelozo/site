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
  title: "VMARTELOZO Global Accounting LLC | Accounting Governance + Tax Compliance + Automation",
  description: "Advanced technical consulting for US SMBs: Accounting Governance, Tax Compliance, Automation, and Team Training using the Valtax Accounting Methodology.",
  keywords: "accounting governance, tax compliance, accounting automation, ERP optimization, internal controls, preventive audits, US SMB accounting consulting",
  icons: {
    icon: "/root/logo-val.png",
    apple: "/root/logo-val.png",
  },
  openGraph: {
    title: "VMARTELOZO Global Accounting LLC",
    description: "Advanced technical consulting for US SMBs: Accounting Governance, Tax Compliance, Automation, and Team Training using the Valtax Accounting Methodology.",
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
