import { ITag } from "./Tag.props";
import styles from "./tag.module.css";
import cn from "classnames";
export const Tag = ({
  color,
  href,
  size,
  children,
  className,
  ...props
}: ITag): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, size, className, {
        [styles.red]: color === "red",
        [styles.green]: color === "green",
        [styles.grey]: color === "grey",
        [styles.default]: color === "default",
        [styles.primary]: color === "primary",
        [styles.s]: size === "s",
        [styles.m]: size === "m",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
