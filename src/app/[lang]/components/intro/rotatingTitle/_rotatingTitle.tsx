"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function RotatingTitle() {
    const t = useTranslations("Intro");

    // t() returns new values on each render -> to avoid infinite loop, useMemo() is needed
    const rotatingWords: string[] = useMemo(
        () => [t("rotatingWord1"), t("rotatingWord2"), t("rotatingWord3"), t("rotatingWord4")],
        [t]
    );

    const colors: string[] = ["#ffa680", "#e6559d", "#558ce6", "#1f1361"];

    const [rotatingWordIndex, setRotatingWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotatingWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [rotatingWords]);

    return (
        <h1>
            {t("titlePrefix")}{" "}
            <span className='relative inline-block w-[120px] fw-bold'>
                <AnimatePresence mode='wait'>
                    <motion.span
                        key={rotatingWords[rotatingWordIndex]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className='absolute left-0 top-0'
                        style={{ color: colors[rotatingWordIndex] }} // ✅ Apply dynamic color
                    >
                        {rotatingWords[rotatingWordIndex]}
                    </motion.span>
                </AnimatePresence>
            </span>
            .
        </h1>
    );
}
