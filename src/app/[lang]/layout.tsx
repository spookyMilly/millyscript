import React from "react";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { routing } from "@/i18n/routing";

import "./globals.scss";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default async function RootLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(lang as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={lang} className='dark'>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <main>
                    <NextIntlClientProvider locale={lang} messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </main>
            </body>
        </html>
    );
}
