import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import WorkshopItem from "@/app/[lang]/components/other/workshopItem/workshopItem";
import talks from "@/app/static/talks.jpeg";

import styles from "./otherCard.module.scss";

export default function OtherCard() {
    const t = useTranslations("Other");
    return (
        <div className={styles.otherCardGrid}>
            <div>
                <Image
                    className={styles.talkImage}
                    src={talks}
                    alt='Zwei Personen, darunter ich, die einen Vortrag halten'
                    priority
                />

                <h1 className={styles.projectCardHeading}>{t("heading")}</h1>
                <hr className={`${styles.titleBorder} w-50`} />
                <small className={styles.projectCardSubtitle}>{t("description")}</small>
            </div>
            <div>
                <div className={"mt-4"}>
                    <WorkshopItem
                        title={t("workshop_1_title")}
                        description={t("workshop_1_description")}
                        type={"Talk"}
                    />
                    <WorkshopItem
                        title={t("workshop_2_title")}
                        description={t("workshop_2_description")}
                        type={"Workshop"}
                    />
                    <WorkshopItem
                        title={t("workshop_3_title")}
                        description={t("workshop_3_description")}
                        type={"Post"}
                        link={"https://blog.cosee.biz/2020/04/15/ten-great-reasons-to-use-gatsby-in-your-next-project"}
                    />
                    <WorkshopItem
                        title={t("workshop_8_title")}
                        description={t("workshop_8_description")}
                        type={"Workshop"}
                    />
                    <WorkshopItem
                        title={t("workshop_4_title")}
                        description={t("workshop_4_description")}
                        type={"Post"}
                        link={"https://blog.cosee.biz/2019/10/10/ten-usability-heuristics"}
                    />
                    <WorkshopItem
                        title={t("workshop_5_title")}
                        description={t("workshop_5_description")}
                        type={"Post"}
                    />
                    <WorkshopItem
                        title={t("workshop_6_title")}
                        description={t("workshop_6_description")}
                        type={"Post"}
                        link={"https://jaxenter.de/devops-stories-mehr-frauenpower-in-de-66378"}
                    />
                    <WorkshopItem
                        title={t("workshop_7_title")}
                        description={t("workshop_7_description")}
                        type={"Talk"}
                    />
                </div>
            </div>
        </div>
    );
}
