import React from "react";
import { Nav } from "react-bootstrap";
import { useTranslations } from "next-intl";

import LocaleSwitcher from "@/app/[lang]/components/navbar/_localeSwitcher";

export default function NavBar() {
    const t = useTranslations("Navigation");
    return (
        <Nav defaultActiveKey='/' className='flex-column'>
            <Nav.Link href={"/about"}>{t("about")}</Nav.Link>
            <Nav.Link href={"/skills"}>{t("skills")}</Nav.Link>
            <Nav.Link href={"/projects"}>{t("projects")}</Nav.Link>
            <Nav.Link href={"/other"}>{t("other")}</Nav.Link>
            <Nav.Link href={"/fun-facts"}>{t("funFacts")}</Nav.Link>
            <LocaleSwitcher />
        </Nav>
    );
}
