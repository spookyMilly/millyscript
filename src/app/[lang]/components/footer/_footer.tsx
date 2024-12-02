"use client";

import React from "react";
import { useTranslations } from "next-intl";

import LocaleSwitcher from "@/app/[lang]/components/navbar/_localeSwitcher";

import styles from "./footer.module.scss";

export function Footer() {
    const t = useTranslations("Footer");
    return (
        <div className={styles.footer}>
            <div>
                <small>
                    © {new Date().getFullYear()} {t("credit")}
                </small>
            </div>

            <div>
                <LocaleSwitcher />
            </div>
        </div>
    );
}
