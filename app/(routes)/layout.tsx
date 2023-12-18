import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import NavBar from "../_components/navBar/NavBar";
import "./globals.css";

// alternative fonts: Montserrat, Poppins, Oswald, Days_One, Roboto
const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Abdelrahman El Toukhy's Blog",
  description: "Articles about React, Next JS, and many more...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={almarai.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
