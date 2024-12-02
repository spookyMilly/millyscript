import { useTranslations } from "next-intl";

export default function OtherCard() {
    const t = useTranslations("other");
    return <h1>{t("heading")}</h1>;
}
