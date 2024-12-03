import React from "react";
import { useTranslations } from "next-intl";

import styles from "./funFactsCard.module.scss";

/* TODO - add a button to generate a random fun fact about me */
export default function FunFactsCard() {
    const t = useTranslations("FunFacts");
    return (
        <div className={styles.funFactsCardGrid}>
            <div>
                <h1 className={styles.funFactsCardHeading}>{t("heading")}</h1>
                <hr className={`${styles.titleBorder} w-50`} />
            </div>
            <div>
                <p>
                    <span className={"text-secondary fs-4"}>#1</span>
                    <br />
                    {t("funFact_1")}
                </p>
                <p>
                    <span className={"text-secondary fs-4"}>#2</span>
                    <br />
                    {t("funFact_2")}
                </p>
                <p>
                    <span className={"text-secondary fs-4"}>#3</span>
                    <br />
                    {t("funFact_3")}
                </p>
                <p>
                    <span className={"text-secondary fs-4"}>#4</span>
                    <br />
                    {t("funFact_4")}
                </p>
                <p>
                    <span className={"text-secondary fs-4"}>#5</span>
                    <br />
                    {t("funFact_5")}
                </p>
                <p>
                    <span className={"text-secondary fs-4"}>#6</span>
                    <br />
                    {t("funFact_6")}
                </p>
            </div>
        </div>
    );
}
