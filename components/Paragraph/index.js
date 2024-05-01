import classnames from "classnames/bind";
import styles from "./Paragraph.module.scss";

const cx = classnames.bind(styles);

export default function Paragraph({ caption, children, intro, marginBottom, marginTop, marginRight, marginLeft }) {
    const paragraphClasses = cx({
        paragraph: true,
        intro: intro, // if intro prop is true(ish), use intro
        caption: caption,
        /* [] signifies "utility class" */
        /* `` backticks signifies a template literal */
        [`margin-top--${marginTop}`]: marginTop,
        [`margin-right--${marginRight}`]: marginRight,
        [`margin-bottom--${marginBottom}`]: marginBottom,
        [`margin-left--${marginLeft}`]: marginLeft,
    });

    return (
        <p className={paragraphClasses}>{children}</p>
    );
}