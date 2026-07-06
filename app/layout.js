import "./globals.css";
import Navbar from "@/components/Navbar";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "LinkShort - Your creative Link Shortener",
  description: "This is LinkShort, an app which generates short links",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} ${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-blue-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
