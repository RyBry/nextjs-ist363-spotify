import styles from "./Showcase.module.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ShowcaseImages from "./Images";
import ShowcaseContent from "./Content";

export default function Showcase({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.showcase}>
            <AnimatePresence>
                <ShowcaseImages items={items} activeIndex={activeIndex} />
                <ShowcaseContent items={items} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </AnimatePresence>
        </div>
    );
}