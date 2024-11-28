"use client";
import React from "react";

import IntroCard from "@/app/[lang]/components/intro/_introCard";
import NavBar from "@/app/[lang]/components/navbar/_navBar";

import styles from "./page.module.scss";

export default function Page() {
    return (
        <div className={styles.page}>
            <IntroCard />
            <div>
                <NavBar />
            </div>
        </div>
    );
}
