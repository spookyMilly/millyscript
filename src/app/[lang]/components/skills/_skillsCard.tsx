import { useTranslations } from "next-intl";

export default function SkillsCard() {
    const t = useTranslations("skills");
    return <h1>{t("heading")}</h1>;
}
