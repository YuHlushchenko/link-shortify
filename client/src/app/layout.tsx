import type { Metadata } from "next";
import { geistSans, geistMono, monserat } from "./fonts";

import { IChildren } from "./types/globals.type";

import "./styles/globals.scss";

export const metadata: Metadata = {
  title: "Link-Shortify",
  description: "Link-Shortify description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: IChildren;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} ${monserat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
