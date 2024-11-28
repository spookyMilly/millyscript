"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "use-intl";

import LocaleSwitcher from "@/app/[lang]/components/_localeSwitcher";

import styles from "./page.module.scss";

export default function Page() {
    const lang = useLocale();

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Image
                    className={styles.logo}
                    src='https://nextjs.org/icons/next.svg'
                    alt='Next.js logo'
                    width={180}
                    height={38}
                    priority
                />
                Main
                <Link href={`/${lang}/about`}>About</Link>
                <LocaleSwitcher />
            </main>
            <footer className={styles.footer}>Footer</footer>
        </div>
    );
}
