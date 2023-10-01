import { ICard } from "./Card.props";
import cn from "classnames";
import styles from "./card.module.scss";
function Card({ BackColor, children, className, ...props }: ICard) {
  return (
    <div
      className={cn(styles.default, className, {
        [styles.ColorCardSpecific]: BackColor === "specific",
      })}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
