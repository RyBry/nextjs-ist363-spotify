import styles from "./Header.module.scss";
import Logo from "../../custom/Logo";
import Heading from "../../html/Heading";

export default function () {
    return (
        <header className={styles.header}>
            <Logo fill="white" />
            <br />
            <Heading level={1}>Top 10 artists</Heading>
        </header>
    );

};