"use client";

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";

import styles from "./navbar.module.scss";

export default function NavBar() {
    const t = useTranslations("Navigation");
    return (
        <Navbar className={styles.navBar} expand='lg' variant={"dark"}>
            <Navbar.Brand as={Link} href={`/`}>
                Millyscript
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className={" justify-content-end"}>
                <Nav className='d-flex align-items-lg-center align-items-end gap-2 gap-lg-0'>
                    <Nav.Link as={Link} href={`/skills`} className={styles.navLink}>
                        {t("skills")}
                    </Nav.Link>
                    <Nav.Link as={Link} href={`/projects`} className={styles.navLink}>
                        {t("projects")}
                    </Nav.Link>
                    <Nav.Link as={Link} href={`/other`} className={styles.navLink}>
                        {t("other")}
                    </Nav.Link>
                    <Nav.Link as={Link} href={`/fun-facts`} className={styles.navLink}>
                        {t("funFacts")}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
