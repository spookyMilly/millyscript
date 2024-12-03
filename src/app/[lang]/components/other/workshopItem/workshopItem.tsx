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
        <small>
            <BoxArrowUpRight className={"mb-1"} />
            &nbsp;
            <a target={"_blank"} rel={"noopener noreferrer"} href={link} className={styles.workshopLink}>
                {t("link")}&nbsp;{type}
            </a>
        </small>
    ) : null;

    function renderIconDependingOnType() {
        if (type === "Workshop") {
            return <Hammer className={"mb-1"} />;
        } else if (type === "Talk") {
            return <ChatSquareHeart className={"mb-1"} />;
        } else if (type === "Post") {
            return <Pencil className={"mb-1"} />;
        } else return <ChatDots className={"mb-1"} />;
    }

    return (
        <div className={"mb-5"}>
            <small className={styles.type}>{type}</small>
            <h2 className={`${styles.heading} mb-1 mt-0`}>
                {renderIconDependingOnType()}&nbsp;{title}
            </h2>
            <p className={"mb-0"}>
                {description}
                <br />
                {renderLink}
            </p>
        </div>
    );
}
