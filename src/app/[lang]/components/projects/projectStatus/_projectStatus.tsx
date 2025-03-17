import React from "react";
import { Badge } from "react-bootstrap";

import styles from "./projectStatus.module.scss";

interface ProjectStatusProps {
    projectStatus: string;
}

export default function ProjectStatus({ projectStatus }: ProjectStatusProps) {
    const renderProjectStatusBackgroundColor = () => {
        if (projectStatus === "live") {
            return "danger";
        } else if (projectStatus === "done" || projectStatus === "abgeschlossen") {
            return "light";
        } else return "secondary";
    };

    return (
        <>
            <span className='visually-hidden'>Status:</span>
            <Badge
                pill
                bg={renderProjectStatusBackgroundColor()}
                className={`${styles.textStyling} ${projectStatus === "live" ? styles.pastelGradient : ""}`}
            >
                {projectStatus}
            </Badge>
        </>
    );
}
