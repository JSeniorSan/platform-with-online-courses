import Card from "../../components/card/Card";
import { ICardInfo } from "./CardInfo.props";
import styles from "./cardInfo.module.scss";
import Image from "next/image";
import { RaitingComponent } from "../../components/rating/RaitingComponent";
import { Tag } from "../../components/tag/Tag";
import { Button } from "../../components/button/Button";
export function CardInfo({ elementInfo }: ICardInfo) {
  return (
    <Card BackColor="white" className={styles.product}>
      <div className={styles.logo}>
        <Image
          src={process.env.NEXT_PUBLIC_DOMAIN + elementInfo.image}
          alt={elementInfo.title}
          width={70}
          height={70}
          quality={100}
          loading="lazy"
        />
      </div>
      <div className={styles.title}>{elementInfo.title}</div>
      <div className={styles.price}>{elementInfo.price}</div>
      <div className={styles.credit}>{elementInfo.credit}</div>
      <div className={styles.rating}>
        <RaitingComponent
          rating={elementInfo.reviewAvg ?? elementInfo.initialRating}
          isEditable={false}
        />
      </div>
      <div className={styles.tags}>
        {elementInfo.tags.map((tag) => {
          return (
            <Tag color="default" size="s" key={tag}>
              {tag}
            </Tag>
          );
        })}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>в кредит</div>
      <div className={styles.reviewsCount}>
        {elementInfo.reviewCount} отзывов
      </div>

      <div className={styles.hrTop}>
        <hr />
      </div>
      <div className={styles.description}>{elementInfo.description}</div>
      <div className={styles.feature}>feature</div>
      <div className={styles.advBox}>
        <div className={styles.advantages}>
          <div>Преимущества</div>
          <div>{elementInfo.advantages}</div>
        </div>
        <div className={styles.disadvantages}>
          <div>Недостатки</div>
          <div>{elementInfo.disadvantages}</div>
        </div>
      </div>
      <div className={styles.hrBottom}>
        <hr />
      </div>
      <div className={styles.actions}>
        <Button appearence="primary">Узнать подробнее</Button>
        <Button appearence="secondary" arrow="right">
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
}
