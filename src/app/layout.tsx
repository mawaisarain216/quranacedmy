import type { Metadata, Viewport } from "next";
import "./globals.css";

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: "Quran Academy | Learn Quran Online",
    template: "%s | Quran Academy",
  },
  description:
    "Learn Quran, Tajweed, Hifz and Islamic Studies online with qualified teachers, flexible schedules and personalized learning.",
  applicationName: "Quran Academy",
  keywords: [
    "Quran Academy",
    "learn Quran online",
    "online Quran classes",
    "Tajweed",
    "Hifz",
    "Islamic Studies",
  ],
  authors: [{ name: "Quran Academy" }],
  creator: "Quran Academy",
  publisher: "Quran Academy",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Quran Academy",
    title: "Quran Academy | Learn Quran Online",
    description:
      "Personalized online Quran, Tajweed, Hifz and Islamic Studies learning.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Academy | Learn Quran Online",
    description:
      "Personalized online Quran, Tajweed, Hifz and Islamic Studies learning.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e5a45",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
