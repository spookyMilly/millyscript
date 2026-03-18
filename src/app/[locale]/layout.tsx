import React from "react";
import { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import { Footer } from "@/app/[locale]/components/footer/_footer";
import NavBar from "@/app/[locale]/components/navbar/_navBar";
import styles from "@/app/[locale]/layout.module.scss";
import { mulish } from "@/fonts";
import { redirect } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

import "@/app/styles/overrides.scss";

export const metadata: Metadata = {
  title: "Millyscript",
  description: "...",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();

  if (!locale || !hasLocale(routing.locales, locale)) {
    console.warn("Locale not found, redirecting to default locale.");
    return redirect({ href: { pathname: "/" }, locale: routing.defaultLocale }); // Default locale (e.g., /en)
  }

  return (
    <html lang={locale} style={{ "--font-mulish": mulish.style.fontFamily } as React.CSSProperties}>
      <NextIntlClientProvider locale={locale}>
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
