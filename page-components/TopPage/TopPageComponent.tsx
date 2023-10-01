import { TopPage } from "./TopPageComponent.props";
import { Hteg } from "../../components/hteg/Hteg";
import { Tag } from "../../components/tag/Tag";
import styles from "../TopPageComponent.module.scss";
import Card from "../../components/card/Card";
import HHLevelCard from "../../components/hhLevelCard/HHLevelCard";
function TopPageComponent({ page, product, menu }: TopPage) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topTitle}>
        <Hteg teg="h1">{page.title}</Hteg>
        <Tag color={"grey"} size={"m"} className={styles.tag}>
          {product.length}
        </Tag>
        Sorting
      </div>
      <div className={styles.hhBlock}>
        <div className={styles.head}>
          <Hteg teg="h2">{`Вакансии - ${page.alias}`}</Hteg>
          <Tag color="red" size="m" className={styles.tag}>
            hh.ru
          </Tag>
        </div>
        <div>
          <Card BackColor="white" className={styles.card}>
            <p>Всего вакансий</p>
            <span>{page.hh.count}</span>
          </Card>
          <HHLevelCard
            firstPrice="10000₽"
            secondPrice="10000₽"
            thirdPrice="10000₽"
            line={true}
          />
        </div>
      </div>
    </div>
  );
}

export default TopPageComponent;
