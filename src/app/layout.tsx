import "../styles/globals.css";
import { Metadata } from "next";

import { Providers } from "./providers";

import { fontSans } from "@/src/config/fonts";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${fontSans.variable} ${fontSans.variable} antialiased`}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
