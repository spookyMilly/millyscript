import { useTranslations } from "next-intl";

export default function FunFactsCard() {
    const t = useTranslations("funFacts");
    return <h1>{t("heading")}</h1>;
}
