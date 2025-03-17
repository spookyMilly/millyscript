import React from "react";
import { Alert } from "react-bootstrap";
import { useTranslations } from "next-intl";

import { BasicLabel } from "@/app/[lang]/components/_common/badge/_basicLabel";
import ProjectFunFacts from "@/app/[lang]/components/projects/projectFunFact/_projectFunFacts";
import ProjectStatus from "@/app/[lang]/components/projects/projectStatus/_projectStatus";
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
                <strong>{t(`projects.${project.id}.projectTitle`)}</strong>
                <ProjectStatus projectStatus={t(`projects.${project.id}.status`)} />
            </h2>
            <p className={styles.subtitle}>{t(`projects.${project.id}.customerType`)}</p>
            <ul className={`list-unstyled ${styles.easierToRead}`}>
                {project.technologiesUsed.map((tech, index) => (
                    <li className={styles.technologyTag} key={index}>
                        <BasicLabel textContent={tech} backgroundColor={"light"} textColor={"primary"} />
                    </li>
                ))}
            </ul>
            <div className={styles.easierToRead}>
                <ResponsibilitiesList projectId={project.id} />
            </div>
            <ProjectFunFacts projectId={project.id} />
        </Alert>
    );
}
