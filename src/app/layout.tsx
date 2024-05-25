import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  fallback: ["Arial", "Times New Roman", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Mega Techs IT",
  description: "Here is Your Next Big Thing in Your Career",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
