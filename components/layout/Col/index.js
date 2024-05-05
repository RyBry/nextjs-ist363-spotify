import styles from "./Col.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles)

const Col = ({ children, xs, sm, md, lg, xl, textAlign }) => {
    const colClasses = cx({
        col: true,
        [`col__xs__${xs}`]: xs,
        [`col__sm__${sm}`]: sm,
        [`col__md__${md}`]: md,
        [`col__lg__${lg}`]: lg,
        [`col__xl__${xl}`]: xl,
        [`text-align--${textAlign}`]: textAlign
    });
    return <div className={colClasses}>{children}</div>
};

export default Col;