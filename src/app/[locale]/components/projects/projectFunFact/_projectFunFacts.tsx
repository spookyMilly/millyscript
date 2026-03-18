import React, { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import styles from "@/app/[locale]/components/projects/projectFunFact/projectFunFact.module.scss";
import { shuffleArray } from "@/app/utils/shuffleArray";

interface ProjectFunFactProps {
  projectId: string;
}

export default function ProjectFunFacts({ projectId }: ProjectFunFactProps) {
  const t = useTranslations("Projects");
  const funFacts: string[] = [
    `${projectId}.funFacts_1`,
    `${projectId}.funFacts_2`,
    `${projectId}.funFacts_3`,
    `${projectId}.funFacts_4`,
  ].reduce<string[]>((acc, key) => {
    const text = t(`projects.${key}`);
    if (text && text !== `projects.${key}`) acc.push(text);
    return acc;
  }, []);

  const colorfulClassNames: string[] = useMemo(
    () => [styles.colorVariation1, styles.colorVariation2, styles.colorVariation3, styles.colorVariation4],
    []
  );

  const [shuffledClassNames, setShuffledClassNames] = useState(colorfulClassNames);

  useEffect(() => {
    setShuffledClassNames(shuffleArray([...colorfulClassNames]));
  }, [colorfulClassNames]);

  return funFacts.length > 0 ? (
    <>
      {funFacts.map((text, index) => (
        <div className={`${styles.emphasizedFunFact} ${shuffledClassNames[index]}`} key={index}>
          {text}
        </div>
      ))}
    </>
  ) : null;
}
