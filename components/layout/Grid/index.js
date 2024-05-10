import Heading from "../../html/Heading";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Grid.module.scss";
import Paragraph from "../../html/Paragraph";

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
            y: 0
        }
    }

    return (
        <motion.ul
            className={styles.grid}
            variants={listVariants}
            initial="initial"
            animate="animate"
        >
            {items.map((item, index) => {
                return (
                    <motion.li
                        className={styles.grid__item}
                        key={`album-${index}`}
                        variants={listItemVariants}
                    >
                        <Image
                            src={item.images[0].url}
                            alt={item.name}
                            width={item.images[0].width}
                            height={item.images[0].height}
                            className="responsive-img"
                        />
                        <Paragraph>{item.name}</Paragraph>
                    </motion.li>
                );
            })}</motion.ul>
    );
}