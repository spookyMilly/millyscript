import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { useTranslations } from "next-intl";

import ProjectWithDescription from "@/app/[lang]/components/projects/projectWithDescription/_projectWithDescription";
import { projects } from "@/app/data/projectList";

import styles from "./projectCard.module.scss";

export default function ProjectsOverview() {
    const t = useTranslations("Projects");
    return (
        <div className={styles.projectCardGrid}>
            <div>
                <h1 className={styles.projectCardHeading}>{t("heading")}</h1>
                <hr className={`${styles.titleBorder} w-50`} />
                <small className={styles.projectCardSubtitle}>{t("description")}</small>
                {/*<p>{t("filter")}</p>*/}
                <div className={"mt-4 mb-4"}>
                    {projects.map((project) => (
                        <span className={styles.projectLink} key={`link-${project.id}`}>
                            <ArrowRight className={"mb-1"} />{" "}
                            <a href={`#project-${project.id}`}>{t(`projects.${project.id}.shortTitle`)}</a>
                            <br />
                        </span>
                    ))}
                </div>
            </div>
            <div>
                {projects.map((project) => (
                    <div className='mb-5' key={project.id} id={`project-${project.id}`}>
                        <ProjectWithDescription project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}
