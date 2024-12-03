import React, { ReactNode } from "react";

interface SkillProps {
    title: string;
    icon: ReactNode;
}

export default function Skill({ title, icon }: SkillProps) {
    return (
        <div>
            <span className={"fs-2 text-secondary"}>{icon}</span>
            <br />
            <p className={"mt-2"}>{title}</p>
        </div>
    );
}
