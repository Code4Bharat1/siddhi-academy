import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO Metadata
export const metadata = {
  title: "Siddhi Academy - Best Coaching Classes",
  description: "Join Siddhi Academy for top-quality education, expert teachers, and excellent student results.",
  keywords: "Siddhi Academy, Coaching Classes, Best Education, Tutorials, Tuition, School Coaching",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  metadataBase: new URL('https://siddhiacademy.com'),  // 🔥 your domain (change if needed)
  openGraph: {
    title: "Siddhi Academy - Best Coaching Classes",
    description: "Join Siddhi Academy for top-quality education, expert teachers, and excellent student results.",
    url: "https://siddhiacademy.com",
    siteName: "Siddhi Academy",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
