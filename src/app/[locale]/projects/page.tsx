"use client";

import ScrollToTopButton from "@/app/[locale]/components/_common/scrollToTopButton/_scrollToTopButton";
import ProjectsOverview from "@/app/[locale]/components/projects/projectsCard/_projectsOverview";

export default function Projects() {
  return (
    <div>
      <ScrollToTopButton />
      <ProjectsOverview />
    </div>
  );
}
