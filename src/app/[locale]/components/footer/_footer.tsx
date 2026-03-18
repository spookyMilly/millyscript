"use client";

import React from "react";
import { useTranslations } from "next-intl";

import styles from "@/app/[locale]/components/footer/footer.module.scss";
import LocaleSwitcher from "@/app/[locale]/components/navbar/_localeSwitcher";

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
