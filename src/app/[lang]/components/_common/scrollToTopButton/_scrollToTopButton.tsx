import React, { useEffect, useState } from "react";
import { ArrowUpSquare } from "react-bootstrap-icons";

import styles from "./scrollToTopButton.module.scss";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            // pageYOffset is not deprecated, wrong warning
            if (window.pageYOffset > 150) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return isVisible ? (
        <button onClick={handleScrollToTop} className={styles.scrollToTopButton}>
            <ArrowUpSquare width={"28"} height={"28"} />
        </button>
    ) : null;
}
