import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import avatar from "@/app/static/intro.jpg";
import avatar_small from "@/app/static/square.jpg";
import { Link } from "@/i18n/routing";

import styles from "./introCard.module.scss";

export default function IntroCard() {
    const t = useTranslations("Intro");
    return (
        <div className={"d-flex flex-lg-row flex-column gap-lg-4 gap-0 align-items-center"}>
            <div className='d-none d-lg-block'>
                <Image className={styles.avatarBig} src={avatar} alt={t("photoAlt")} priority />
            </div>
            <div className={"d-block d-lg-none"}>
                <Image src={avatar_small} className={styles.avatarSmall} alt={t("photoAlt")} priority />
            </div>
            <div>
                <h1>{t("heading")}</h1>
                <p className={"fs-5"} dangerouslySetInnerHTML={{ __html: t("description") }} />
                <p>
                    {t.rich("linkToProjects", {
                        link: (chunks) => <Link href='/projects'>{chunks}</Link>,
                    })}
                </p>
            </div>
        </div>
    );
}
