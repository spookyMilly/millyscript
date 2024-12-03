import React from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Footer } from "@/app/[lang]/components/footer/_footer";
import NavBar from "@/app/[lang]/components/navbar/_navBar";
import { bodoniModa, notoSerif, playfairDisplay } from "@/fonts";
import { routing } from "@/i18n/routing";

import "@/app/styles/overrides.scss";
import styles from "./layout.module.scss";
import Head from "next/head";

export default async function RootLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    if (!routing.locales.includes(lang as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html
            lang={lang}
            style={
                {
                    "--font-bodoni-moda": bodoniModa.style.fontFamily,
                    "--font-playfair-display": playfairDisplay.style.fontFamily,
                    "--font-noto-serif": notoSerif.style.fontFamily,
                } as React.CSSProperties
            }
        >
            <Head>
                <title>Millyscript</title>
            </Head>
            <NextIntlClientProvider locale={lang} messages={messages}>
                <body>
                    <div className={styles.mainContainer}>
                        <NavBar />
                        <main className={styles.contentContainer}>{children}</main>
                        <Footer />
                    </div>
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
