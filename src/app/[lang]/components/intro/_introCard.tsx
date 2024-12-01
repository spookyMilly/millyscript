import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import avatar from "@/app/static/intro.jpg";
import { Link } from "@/i18n/routing";

import styles from "./introCard.module.scss";

export default function IntroCard() {
    const t = useTranslations("intro");
    return (
        <div className={"d-flex flex-lg-row flex-column gap-4"}>
            <div>
                <Image className={styles.avatar} src={avatar} alt='Theodora' priority />
            </div>
            <div>
                <h1>{t("heading")}</h1>
                <p className={"fs-4"} dangerouslySetInnerHTML={{ __html: t("description") }} />
                <p>
                    {t.rich("linkToProjects", {
                        link: (chunks) => <Link href='/projects'>{chunks}</Link>,
                    })}
                </p>
            </div>
        </div>
    );
}
