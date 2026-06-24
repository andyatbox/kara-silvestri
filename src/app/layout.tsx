import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { DrakeBellProvider } from "@/components/DrakeBell";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karasilvestri.com"),
  title: {
    default: "Kara Silvestri",
    template: "%s — Kara Silvestri",
  },
  description: "Creative Designer / Film Director",
  openGraph: {
    title: "Kara Silvestri",
    description: "Creative Designer / Film Director",
    url: "https://karasilvestri.com",
    siteName: "Kara Silvestri",
    type: "website",
    images: [
      {
        url: "/assets/underwater-home.jpg",
        width: 1550,
        height: 1034,
        alt: "Kara Silvestri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kara Silvestri",
    description: "Creative Designer / Film Director",
    images: ["/assets/underwater-home.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full bg-black`}>
      <body className="min-h-full flex flex-col text-white antialiased">
        <DrakeBellProvider>
          <Nav />
          <div className="flex-1">{children}</div>
          <Footer />
        </DrakeBellProvider>
      </body>
    </html>
  );
}
