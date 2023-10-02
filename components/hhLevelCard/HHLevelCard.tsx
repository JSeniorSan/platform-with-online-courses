import Card from "../card/Card";
import styles from "./hhLevelCard.module.scss";
import { ILevelCard } from "./HHLevelCard.props";
import cn from "classnames";
import StarUiOrange from "./StarUiOrange";
import StarUiGrey from "./StarUiGrey";
function HHLevelCard({
  firstPrice,
  secondPrice,
  thirdPrice,
  line,
}: ILevelCard) {
  return (
    <Card BackColor="white" className={styles.levelCard}>
      <div
        className={cn(styles.level, {
          [styles.LineActive]: line === true,
        })}
      >
        <div className={styles.title}>Начальный</div>
        <div className={styles.salary}>{firstPrice + " " + "₽"}</div>
        <div className={styles.stars}>
          <StarUiOrange />
          <StarUiGrey />
          <StarUiGrey />
        </div>
      </div>
      <div
        className={cn(styles.level, {
          [styles.LineActive]: line,
        })}
      >
        <div className={styles.title}>Средний</div>
        <div className={styles.salary}>{secondPrice + " " + "₽"}</div>
        <div className={styles.stars}>
          <StarUiOrange />
          <StarUiOrange />
          <StarUiGrey />
        </div>
      </div>
      <div className={cn(styles.level)}>
        <div className={styles.title}>Профессионал</div>
        <div className={styles.salary}>{thirdPrice + " " + "₽"}</div>
        <div className={styles.stars}>
          <StarUiOrange />
          <StarUiOrange />
          <StarUiOrange />
        </div>
      </div>
    </Card>
  );
}

export default HHLevelCard;
