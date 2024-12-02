import { useTranslations } from "next-intl";

export default function AboutCard() {
    const t = useTranslations("about");
    return <h1>{t("heading")}</h1>;
}
