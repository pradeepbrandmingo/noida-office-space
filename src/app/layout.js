import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Centralized Global Font Configuration
 * Plus Jakarta Sans matches the clean, modern corporate typography of the reference UI.
 * If client asks to change font in future, simply change this Google Font import!
 */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Noida Office Space | Find Premium Commercial Office Spaces in Noida",
  description:
    "Find premium furnished, bare-shell & coworking office spaces across prime sectors of Noida and Greater Noida Expressway. Verified listings with zero brokerage options.",
  keywords: [
    "Noida Office Space",
    "Commercial Office Noida",
    "Office for rent Sector 62",
    "Office space Noida Expressway",
    "Coworking space Noida",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[var(--bg-main)] text-[var(--text-body)]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
