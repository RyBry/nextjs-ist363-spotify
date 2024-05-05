import styles from "./ButtonUI.module.scss";
import Icon from "../Icon";

export default function ButtonUI({ clickHandler, icon, label }) {
    return (
        <button className={styles.btnui} onClick={clickHandler}>
            {label}
            <Icon icon={icon} />
        </button>
    );
}