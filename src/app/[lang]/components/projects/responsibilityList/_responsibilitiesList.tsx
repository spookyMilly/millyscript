import { useTranslations } from "next-intl";

import styles from "./responsibilityList.module.scss";

interface ResponsibilitiesListProps {
    projectId: string;
}

export default function ResponsibilitiesList({ projectId }: ResponsibilitiesListProps) {
    const t = useTranslations("Projects");
    const responsibilities: string[] = [
        `${projectId}.responsibilitiesTaken_1`,
        `${projectId}.responsibilitiesTaken_2`,
        `${projectId}.responsibilitiesTaken_3`,
        `${projectId}.responsibilitiesTaken_4`,
    ].reduce<string[]>((acc, key) => {
        const text = t(`projects.${key}`);
        if (text && text !== `projects.${key}`) acc.push(text);
        return acc;
    }, []);

    if (responsibilities.length === 0) return null;

    return (
        <div className={styles.responsibilityList}>
            <small>
                <ul>
                    {responsibilities.map((text, index) => (
                        <li className={styles.responsibilityItem} key={index}>
                            {text}
                        </li>
                    ))}
                </ul>
            </small>
        </div>
    );
}
