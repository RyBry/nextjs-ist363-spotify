import classnames from "classnames/bind";
import styles from "./Heading.module.scss";

const cx = classnames.bind(styles);

export default function Heading({ children, level, marginBottom, marginTop, marginRight, marginLeft }) {
    const Tag = `h${level}`;

    const headingClasses = cx({
        heading: true,
        [`heading--${level}`]: level,
        [`margin-top--${marginTop}`]: marginTop,
        [`margin-right--${marginRight}`]: marginRight,
        [`margin-bottom--${marginBottom}`]: marginBottom,
        [`margin-left--${marginLeft}`]: marginLeft,
    });

    return (
        <Tag class={headingClasses}>{children}</Tag>
    );
}