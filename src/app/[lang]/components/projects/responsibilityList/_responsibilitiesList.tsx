import { useTranslations } from "next-intl";

import styles from "./responsibilityList.module.scss";

interface ResponsibilitiesListProps {
    projectId: string;
}

export default function ResponsibilitiesList({ projectId }: ResponsibilitiesListProps) {
    const t = useTranslations("Projects");
    const responsibilityKeys = [
        `${projectId}.responsibilitiesTaken_1`,
        `${projectId}.responsibilitiesTaken_2`,
        `${projectId}.responsibilitiesTaken_3`,
        `${projectId}.responsibilitiesTaken_4`,
        `${projectId}.responsibilitiesTaken_5`,
    ] as const;

    return (
        <div className={styles.responsibilityList}>
            <ul>
                {responsibilityKeys.map((key) => (
                    <li className={styles.responsibilityItem} key={key}>
                        {t(`projects.${key}`)}
                    </li>
                ))}
            </ul>
        </div>
    );
}
