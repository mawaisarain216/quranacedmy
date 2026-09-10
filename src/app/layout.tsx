import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Quran Academy | Learn Quran Online",description:"A modern Quran learning platform for Quran, Tajweed, Hifz and Islamic Studies."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
