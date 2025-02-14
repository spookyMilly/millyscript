import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Footer } from "@/app/[lang]/components/footer/_footer";
import NavBar from "@/app/[lang]/components/navbar/_navBar";
import { mulish } from "@/fonts";
import { routing } from "@/i18n/routing";

import "@/app/styles/overrides.scss";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
    title: "Millyscript",
    description: "...",
};

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
                    "--font-mulish": mulish.style.fontFamily,
                } as React.CSSProperties
            }
        >
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
