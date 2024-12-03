"use client";

import ScrollToTopButton from "@/app/[lang]/components/_common/scrollToTopButton/_scrollToTopButton";
import ProjectsCard from "@/app/[lang]/components/projects/projectsCard/_projectsCard";

export default function Projects() {
    return (
        <div>
            <ScrollToTopButton />
            <ProjectsCard />
        </div>
    );
}
