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
  metadataBase: new URL('https://www.vmartelozo.com'),
  title: {
    default: "VMARTELOZO Global Accounting LLC | Accounting Governance + Tax Compliance + Automation",
    template: "%s | VMARTELOZO Global Accounting",
  },
  description: "Advanced technical consulting for US SMBs: Accounting Governance, Tax Compliance, Automation, and Team Training using the Valtax Accounting Methodology.",
  keywords: [
    "accounting governance",
    "tax compliance",
    "accounting automation",
    "ERP optimization",
    "internal controls",
    "preventive audits",
    "US SMB accounting consulting",
    "Valtax methodology",
    "bookkeeping",
    "financial consulting",
  ],
  authors: [{ name: "VMARTELOZO Global Accounting LLC" }],
  creator: "VMARTELOZO Global Accounting LLC",
  publisher: "VMARTELOZO Global Accounting LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "VMARTELOZO Global Accounting LLC",
    description: "Advanced technical consulting for US SMBs: Accounting Governance, Tax Compliance, Automation, and Team Training using the Valtax Accounting Methodology.",
    url: "https://www.vmartelozo.com",
    siteName: "VMARTELOZO Global Accounting LLC",
    images: [
      {
        url: "/root/og-image.png",
        width: 1200,
        height: 630,
        alt: "VMARTELOZO Global Accounting LLC - Accounting Governance, Tax Compliance & Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VMARTELOZO Global Accounting LLC",
    description: "Advanced technical consulting for US SMBs: Accounting Governance, Tax Compliance, Automation, and Team Training.",
    images: ["/root/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/root/logo-val.png",
    apple: "/root/logo-val.png",
  },
  alternates: {
    canonical: "https://www.vmartelozo.com",
  },
  category: "accounting services",
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
