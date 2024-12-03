import { Badge } from "react-bootstrap";

import styles from "./basicLabel.module.scss";

interface BasicLabelProps {
    textContent: string;
    backgroundColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    hasRoundedCorners?: boolean;
    textColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
}

export const BasicLabel = ({
    textContent,
    backgroundColor = "secondary",
    hasRoundedCorners = false,
    textColor,
}: BasicLabelProps) => {
    return (
        <Badge pill={hasRoundedCorners} text={textColor} bg={backgroundColor} className={styles.basicLabel}>
            {textContent}
        </Badge>
    );
};
