import Heading from "../../html/Heading";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Grid.module.scss";
import Paragraph from "../../html/Paragraph";
import { useState, useEffect } from "react";

export default function Grid({ items }) {


    const listVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.15
            }
        }
    }

    const listItemVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
        },

    }

    return (
        <motion.ul
            className={styles.grid}
            variants={listVariants}
            initial="initial"
            animate="animate"
        >
            {items.map((item, index) => {
                const [mouseOverImage, setMouseOverImage] = useState(false);

                return (

                    <motion.li
                        className={styles.grid__item}
                        key={`album-${index}`}
                        variants={listItemVariants}
                    >
                        <a
                            style={{
                                paddingLeft: mouseOverImage ? "20px" : "0px",
                                paddingRight: mouseOverImage ? "20px" : "0px",
                                cursor: "pointer",
                                transition: "all 0.2s",
                                opacity: mouseOverImage ? "0.5" : "1"
                            }}
                            onMouseOver={() => {
                                console.log("ugh");
                                setMouseOverImage(true);
                            }}
                            onMouseOut={() => {
                                setMouseOverImage(false)
                            }}
                            onMouseDown={() => {
                                window.open(item.external_urls.spotify, "_blank").focus();
                            }}
                        >
                            <Image
                                src={item.images[0].url}
                                alt={item.name}
                                width={item.images[0].width}
                                height={item.images[0].height}
                                className="responsive-img"
                            />
                        </a>

                        <Paragraph>{item.name}</Paragraph>
                    </motion.li>
                );
            })}</motion.ul>
    );
}