import { useTranslations } from "next-intl";

import styles from "./footer.module.scss";

export function Footer() {
    const t = useTranslations("Footer");
    return (
        <div className={styles.footer}>
            <small>
                © {new Date().getFullYear()} {t("credit")}
            </small>
        </div>
    );
}
