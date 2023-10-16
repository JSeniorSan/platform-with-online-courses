import { IParagraph } from "./paragraph.props";
import styles from "./paragraph.module.scss";
import cn from "classnames";
export function P({
  children,
  fontHeight = "16px",
  className,
  ...props
}: IParagraph): JSX.Element {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.h14]: fontHeight === "14px",
        [styles.h18]: fontHeight === "18px",
        [styles.h16]: fontHeight === "16px",
      })}
      {...props}
    >
      {children}
    </p>
  );
}
