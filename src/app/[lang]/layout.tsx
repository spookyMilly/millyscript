import React from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Footer } from "@/app/[lang]/components/footer/_footer";
import { josefinSans, yesevaOne } from "@/fonts";
import { routing } from "@/i18n/routing";

import "@/app/styles/overrides.scss";
import styles from "./layout.module.scss";

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
        <html lang={lang}>
            <body className={`${josefinSans.variable} ${yesevaOne.variable}`}>
                <div className={styles.mainContainer}>
                    <main className={styles.contentContainer}>
                        <NextIntlClientProvider locale={lang} messages={messages}>
                            {children}
                        </NextIntlClientProvider>
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
