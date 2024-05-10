import styles from "./ButtonUI.module.scss";
import Icon from "../Icon";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export default function ButtonUI({ clickHandler, icon, label, disabled }) {

    const buttonUIClasses = cx({
        btnui: true,
        close: icon === "faXmark",
        disabled: disabled,
        label: label,
    })

    return (
        <button className={buttonUIClasses} onClick={clickHandler}>
            {label}
            <Icon icon={icon} />
        </button>
    );
}