import Image from "next/image";
import styles from "./Logo.module.scss";

export default function Logo({ fill }) {
    return (
        <Image
            src={`spotify-logo--${fill}.svg`}
            alt={`${fill} Spotify logo`}
            width={78}
            height={24}
            className={styles.logo}
        />
    );
}