import styles from "./Showcase.module.scss";
import Row from "../../layout/Row";
import Container from "../../layout/Container";
import Col from "../../layout/Col";
import { motion } from "framer-motion";
import ButtonUI from "../../html/ButtonUI";
import Heading from "../../html/Heading";

export default function ShowcaseContent({ activeIndex, items, setActiveIndex }) {
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
                    <Col md={5}>
                        <div className={styles.showcase__latest}>
                            <Heading level={3}>Latest Releases</Heading>
                        </div>
                    </Col>
                    <Col md={6} textAlign="right">
                        <ButtonUI label="View artist page" icon="faArrowRight" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}