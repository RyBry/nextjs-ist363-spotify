import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ShowcaseImages from "./Images";
import ShowcaseContent from "./Content";
import ShowcaseExpandedContent from "./ExpandedContent";
import classNames from "classnames/bind";

import styles from "./Showcase.module.scss";

const cx = classNames.bind();

export default function Showcase({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [albums, setAlbums] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (items.length > 0) {
            try {
                fetch(`/api/albums?id=${items[activeIndex].id}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setAlbums(data.items);
                    })
            } catch (error) {
                console.log(error);
            }
        }
    }, [activeIndex]);

    const showcaseClasses = cx({
        showcase: true,
        expanded: isExpanded,
    })

    return (
        <div className={showcaseClasses}>
            <AnimatePresence>
                <ShowcaseImages
                    items={items}
                    activeIndex={activeIndex}
                    isExpanded={isExpanded} />
                {!isExpanded ? (
                    <ShowcaseContent
                        items={items}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        latestRelease={albums.length > 0 ? albums[0] : null}
                        isExpanded={isExpanded}
                        setIsExpanded={setIsExpanded}
                    />
                ) : (
                    <ShowcaseExpandedContent
                        items={items}
                        activeIndex={activeIndex}
                        albums={albums}
                        setIsExpanded={setIsExpanded}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}