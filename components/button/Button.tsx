import { IButton } from "./button.props";
import { Arrow } from "../ui/Arrow";

import styles from "./button.module.scss";

import cn from "classnames";
export const Button = ({
  arrow = "none",
  appearence,
  children,
  className,
  ...props
}: IButton): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearence === "primary",
        [styles.secondary]: appearence === "secondary",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrowPic, {
            [styles.arrowPicDown]: arrow === "down",
          })}
        >
          <Arrow />
        </span>
      )}
    </button>
  );
};
