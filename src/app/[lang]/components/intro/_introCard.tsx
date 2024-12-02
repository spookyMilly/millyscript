import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import avatar from "../../../static/intro-img.jpg";

import styles from "./introCard.module.scss";

export default function IntroCard() {
    const t = useTranslations("intro");
    return (
        <>
            <div>
                <Image className={styles.avatar} src={avatar} alt='Theodora' priority />
            </div>
            <div>
                <h1>
                    {t("heading")}&nbsp;
                    <span>👋 </span>
                </h1>
                <p>{t("description")}</p>
            </div>
        </>
    );
}
