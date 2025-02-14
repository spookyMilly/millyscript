import { Alert } from "react-bootstrap";
import { BoxArrowUpRight, ChatDots, ChatSquareHeart, Hammer, Pencil } from "react-bootstrap-icons";
import { useTranslations } from "next-intl";

import styles from "./workshopItem.module.scss";

interface WorkshopItemProps {
    title: string;
    type: "Workshop" | "Post" | "Talk" | "Misc";
    description: string;
    link?: string;
}

export default function WorkshopItem({ title, type, description, link }: WorkshopItemProps) {
    const t = useTranslations("Other");
    const renderLink = link ? (
        <p className={styles.workshopLink}>
            <BoxArrowUpRight className={"mb-1"} />
            &nbsp;
            <a target={"_blank"} rel={"noopener noreferrer"} href={link}>
                {t("link")}&nbsp;{type}
            </a>
        </p>
    ) : null;

    function renderIconDependingOnType() {
        if (type === "Workshop") {
            return <Hammer className={"mb-1"} height={25} width={25} />;
        } else if (type === "Talk") {
            return <ChatSquareHeart className={"mb-1"} height={25} width={25} />;
        } else if (type === "Post") {
            return <Pencil className={"mb-1"} height={25} width={25} />;
        } else return <ChatDots className={"mb-1"} height={25} width={25} />;
    }

    return (
        <Alert variant={"light"} className={"mb-2"}>
            <small className={styles.type}>{type}</small>
            <h2 className={`${styles.heading} mb-1 mt-0`}>
                {renderIconDependingOnType()}&nbsp;{title}
            </h2>

            <p>{description}</p>
            {renderLink}
        </Alert>
    );
}
