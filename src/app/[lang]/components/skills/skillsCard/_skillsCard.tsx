import React from "react";
import {
    ArrowLeftRight,
    ArrowThroughHeart,
    Brush,
    ChatSquareHeart,
    Crosshair,
    CupHot,
    EmojiGrin,
    Eyedropper,
    FiletypeMdx,
    Google,
    Hammer,
    People,
    PersonArmsUp,
    Screwdriver,
} from "react-bootstrap-icons";
import { useTranslations } from "next-intl";

import Skill from "@/app/[lang]/components/skills/skill/_skill";

import styles from "./skillsCard.module.scss";

export default function SkillsCard() {
    const t = useTranslations("Skills");
    return (
        <div className={styles.skillsCardGrid}>
            <div>
                <h1 className={styles.skillsCardHeading}>{t("heading")}</h1>
                <hr className={`${styles.titleBorder} w-50`} />
                <small className={styles.projectCardSubtitle}>{t("description")}</small>
            </div>
            <div className={styles.skillsGrid}>
                <Skill title={t("skill_1")} icon={<Hammer />} />
                <Skill title={t("skill_2")} icon={<Brush />} />
                <Skill title={t("skill_3")} icon={<ArrowLeftRight />} />
                <Skill title={t("skill_4")} icon={<ArrowThroughHeart />} />
                <Skill title={t("skill_5")} icon={<ChatSquareHeart />} />
                <Skill title={t("skill_6")} icon={<People />} />
                <Skill title={t("skill_7")} icon={<Crosshair />} />
                <Skill title={t("skill_8")} icon={<PersonArmsUp />} />
                <Skill title={t("skill_9")} icon={<Google />} />
                <Skill title={t("skill_10")} icon={<Eyedropper />} />
                <Skill title={t("skill_11")} icon={<CupHot />} />
                <Skill title={t("skill_12")} icon={<FiletypeMdx />} />
                <Skill title={t("skill_13")} icon={<Screwdriver />} />
                <Skill title={t("skill_14")} icon={<EmojiGrin />} />
            </div>
        </div>
    );
}
