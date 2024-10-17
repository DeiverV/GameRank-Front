import { Metadata } from "next";
import { Providers } from "./providers";
import { poppins } from "@/src/config/fonts";

import "../styles/globals.css";
import "../styles/fonts.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.className}`}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
