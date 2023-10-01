import Card from "../card/Card";
import { Hteg } from "../hteg/Hteg";
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
        <p>Начальный</p>
        <Hteg teg="h3">{firstPrice}</Hteg>
        <div>
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
        <p>Средний</p>
        <Hteg teg="h3">{secondPrice}</Hteg>
        <div>
          <StarUiOrange />
          <StarUiOrange />
          <StarUiGrey />
        </div>
      </div>
      <div className={cn(styles.level)}>
        <p>Профессионал</p>
        <Hteg teg="h3">{thirdPrice}</Hteg>
        <div>
          <StarUiOrange />
          <StarUiOrange />
          <StarUiOrange />
        </div>
      </div>
    </Card>
  );
}

export default HHLevelCard;
