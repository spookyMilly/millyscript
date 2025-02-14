import React from "react";
import { Alert } from "react-bootstrap";
import { Star } from "react-bootstrap-icons";
import { useTranslations } from "next-intl";

import { BasicLabel } from "@/app/[lang]/components/_common/badge/_basicLabel";
import ResponsibilitiesList from "@/app/[lang]/components/projects/responsibilityList/_responsibilitiesList";
import { Project } from "@/app/model/project";

import styles from "./projectWithDescription.module.scss";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectWithDescription({ project }: ProjectCardProps) {
    const t = useTranslations("Projects");

    return (
        <Alert variant={"light"} className={"mb-2"}>
            <h2 className={"m-0"}>
                <Star className={"mb-2"} width={"25"} height={"25"} />
                &nbsp;
                {t(`projects.${project.id}.projectTitle`)}
            </h2>
            <p className={styles.subtitle}>{t(`projects.${project.id}.customerType`)}</p>
            <h3 className={"mb-2 mt-2"}>{t(`technologiesUsed`)}</h3>
            <ul className={`list-unstyled ${styles.easierToRead}`}>
                {project.technologiesUsed.map((tech, index) => (
                    <li className={styles.technologyTag} key={index}>
                        <BasicLabel textContent={tech} backgroundColor={"light"} textColor={"primary"} />
                    </li>
                ))}
            </ul>
            <div className={styles.easierToRead}>
                <span className={styles.miniHeading}>{t(`responsibilities`)}</span>{" "}
                <ResponsibilitiesList projectId={project.id} />
            </div>
        </Alert>
    );
}
