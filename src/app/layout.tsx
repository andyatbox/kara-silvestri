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
    default: "Kara Silvestri — Creative Director, Filmmaker, Musician, Actress",
    template: "%s — Kara Silvestri",
  },
  description:
    "Kara Silvestri is a multidisciplinary artist, designer, and creative director based between New Jersey and New York City. Her work spans creative direction, advertising, motion design, UX/UI, filmmaking, acting, and music.",
  openGraph: {
    title: "Kara Silvestri",
    description:
      "Creative Director · Filmmaker · Musician · Actress · Host. A multidisciplinary artist based between New Jersey and New York City.",
    url: "https://karasilvestri.com",
    siteName: "Kara Silvestri",
    type: "website",
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
