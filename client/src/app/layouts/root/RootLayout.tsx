import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { geistSans, geistMono, monserat } from "../../fonts";

import { IChildren } from "../../types/global";

// import "../styles/globals.scss";

interface IProps {
  children: IChildren;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: "Link-Shortify",
  description: "Link-Shortify description",
};

const RootLayout = async ({
  children,
  params: { locale },
}: Readonly<IProps>) => {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.className} ${geistMono.variable} ${monserat.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
