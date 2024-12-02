import { useTranslations } from "next-intl";

export default function ProjectsCard() {
    const t = useTranslations("projects");
    return <h1>{t("heading")}</h1>;
}
