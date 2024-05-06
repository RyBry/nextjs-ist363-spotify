import styles from "./Showcase.module.scss";
import Row from "../../layout/Row";
import Container from "../../layout/Container";
import Col from "../../layout/Col";
import { motion } from "framer-motion";
import ButtonUI from "../../html/ButtonUI";
import Heading from "../../html/Heading";
import Image from "next/image";

export default function ShowcaseContent({ activeIndex, items, setActiveIndex, latestRelease }) {
    const headlineVariants = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    }

    const numberVariants = {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
    }

    return (
        <div className={styles.showcase__content}>
            <Container>
                <Row alignItems="flex-end" paddingBottom={2}>
                    <Col md={1}>
                        <span className={styles.showcase__counter}>{activeIndex + 1}/{items.length}</span>
                    </Col>
                    <Col xs={3} md={5}>
                        <motion.div
                            variants={numberVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            key={`number-${activeIndex}`}
                        >
                            <span className={styles.showcase__number}>{activeIndex + 1}</span>
                        </motion.div>
                    </Col>
                    <Col xs={9} md={6}>
                        <motion.h2
                            className={styles.showcase__artist}
                            variants={headlineVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            key={`artist-${activeIndex}`}
                        >
                            {items[activeIndex].name}
                        </motion.h2>
                    </Col>
                </Row>
                <Row paddingBottom={2} paddingTop={2} borderTop={1}>
                    <Col md={1}>
                        <Row justifyContent="space-between">
                            <ButtonUI icon="faAngleLeft" clickHandler={() => {
                                setActiveIndex(activeIndex <= 0 ? 0 : activeIndex - 1);
                            }
                            } />
                            <ButtonUI icon="faAngleRight" clickHandler={() => {
                                setActiveIndex(activeIndex >= items.length - 1 ? items.length - 1 : activeIndex + 1);
                            }
                            } />
                        </Row>
                    </Col>
                    {latestRelease && (
                        <Col md={5}>
                            <div className={styles.showcase__latest}>
                                <Row>
                                    <Col xs={4} sm={4}>
                                        <Image
                                            src={latestRelease.images[0].url}
                                            alt={latestRelease.name}
                                            width={latestRelease.images[0].width}
                                            height={latestRelease.images[0].height}
                                            className={styles.album__cover}
                                        />
                                    </Col>
                                    <Col xs={8} sm={8}>
                                        {" "}
                                        <Heading level={3}>Latest Release</Heading>
                                        <Heading level={4}>{latestRelease.name}</Heading>
                                        <Heading level={5}>
                                            {
                                                // input: 2024-04-19
                                                // split: ["2024", "04", "19"]
                                                // zero index for "2024"
                                                latestRelease.release_date.split("-")[0]}
                                        </Heading>
                                    </Col>
                                </Row>
                                <Heading level={3}>Latest Release</Heading>
                            </div>
                        </Col>
                    )}
                    <Col md={6} textAlign="right">
                        <ButtonUI label="View artist page" icon="faArrowRight" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}