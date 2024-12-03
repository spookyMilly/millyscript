import { useTranslations } from "next-intl";

import { BasicLabel } from "@/app/[lang]/components/_common/badge/basicLabel";
import ResponsibilitiesList from "@/app/[lang]/components/projects/_responsibilitiesList";
import { Project } from "@/app/model/project";

import styles from "./projectWithDescription.module.scss";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectWithDescription({ project }: ProjectCardProps) {
    const t = useTranslations("Projects");

    return (
        <div>
            <h2 className={"m-0"}>{t(`projects.${project.id}.projectTitle`)}</h2>
            <p className={styles.subtitle}>{t(`projects.${project.id}.customerType`)}</p>
            <h3 className={"mb-2 mt-2"}>Technologies Used:</h3>
            <ul className={`list-unstyled ${styles.easierToRead}`}>
                {project.technologiesUsed.map((tech, index) => (
                    <li className={styles.technologyTag} key={index}>
                        <BasicLabel textContent={tech} backgroundColor={"dark"} textColor={"primary"} />
                    </li>
                ))}
            </ul>
            <div className={styles.easierToRead}>
                <span className={styles.miniHeading}>Responsibilities:</span>{" "}
                <ResponsibilitiesList projectId={project.id} />
                <p>
                    <span className={styles.miniHeading}>Result:</span> {t(`projects.${project.id}.result`)}
                </p>
            </div>
        </div>
    );
}
