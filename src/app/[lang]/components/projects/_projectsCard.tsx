import React from "react";
import { useTranslations } from "next-intl";

import ProjectWithDescription from "@/app/[lang]/components/projects/_projectWithDescription";
import { projects } from "@/app/[lang]/components/projects/projectList";

import styles from "./projectCard.module.scss";

export default function ProjectsCard() {
    const t = useTranslations("Projects");
    return (
        <div className={styles.projectCardGrid}>
            <div>
                <h1 className={styles.projectCardHeading}>{t("heading")}</h1>
                <hr className={`${styles.titleBorder} w-50`} />
                <small className={styles.projectCardSubtitle}>{t("description")}</small>
                {/*<p>{t("filter")}</p>*/}
            </div>
            <div>
                {projects.map((project) => (
                    <div className='mb-5' key={project.id}>
                        <ProjectWithDescription project={project} />
                        <hr className={`${styles.projectSeparator} w-25`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
