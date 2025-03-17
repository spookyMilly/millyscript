"use client";

import ScrollToTopButton from "@/app/[lang]/components/_common/scrollToTopButton/_scrollToTopButton";
import ProjectsOverview from "@/app/[lang]/components/projects/projectsCard/_projectsOverview";

export default function Projects() {
    return (
        <div>
            <ScrollToTopButton />
            <ProjectsOverview />
        </div>
    );
}
