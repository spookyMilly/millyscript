"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "./page.module.scss";

export default function Page() {
    const router = useRouter();
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
                <a
                    href='#'
                    onClick={() => {
                        router.replace(`en`);
                    }}
                >
                    EN
                </a>{" "}
                |{" "}
                <a
                    href='#'
                    onClick={() => {
                        router.replace(`de`);
                    }}
                >
                    DE
                </a>
                <br />
                <Link href={"/about"}>About</Link>
            </main>
            <footer className={styles.footer}>Footer</footer>
        </div>
    );
}
