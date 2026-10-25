import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "../index.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const description =
  "Portfolio of Najeeb Ullah, a MERN stack developer building modern, responsive web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Najeeb Ullah | MERN Stack Developer",
    template: "%s | Najeeb Ullah",
  },
  description,
  keywords: ["Najeeb Ullah", "MERN stack developer", "React developer", "Next.js developer"],
  authors: [{ name: "Najeeb Ullah" }],
  creator: "Najeeb Ullah",
  openGraph: {
    title: "Najeeb Ullah | MERN Stack Developer",
    description,
    type: "website",
    images: [{ url: "/assets/images/headerImg.png", alt: "Najeeb Ullah" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Najeeb Ullah | MERN Stack Developer",
    description,
    images: ["/assets/images/headerImg.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}