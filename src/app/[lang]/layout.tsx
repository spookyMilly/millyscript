"use client";

import React from "react";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

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
    let messages;
    try {
        messages = (await import(`../../i18n/translations/${lang}.json`)).default;
    } catch (error) {
        console.error("error getting translations:", error);
        notFound();
    }

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
