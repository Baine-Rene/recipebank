import { Geist, Geist_Mono, Edu_AU_VIC_WA_NT_Pre  } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar";


const eduFont = Edu_AU_VIC_WA_NT_Pre({
  subsets: ["latin"],
  variable: "--font-edu",
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Recipe Bank",
  description: "Share your recipe and inspire others today. Upload all you recipe needs and learn from others.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${eduFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-amber-200">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
