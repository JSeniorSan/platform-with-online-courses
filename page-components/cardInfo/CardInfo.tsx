import Card from "../../components/card/Card";
import { ICardInfo } from "./CardInfo.props";
import styles from "./cardInfo.module.scss";
import Image from "next/image";
import { RaitingComponent } from "../../components/rating/RaitingComponent";
import { Tag } from "../../components/tag/Tag";
import { Button } from "../../components/button/Button";
import GoldAward from "../../components/goldAward/GoldAward";
import { RegexRuPrice, numDevTransform } from "../../helpers/helpers";
import { P } from "../../components/paragraph/P";
import { values } from "../../../typescript/src/13-genrics";
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
          objectFit="fill"
        />
      </div>
      <div className={styles.title}>{elementInfo.title}</div>
      <div className={styles.price}>
        {RegexRuPrice(elementInfo.price) + " ₽ "}
        <Tag color="green" size={"m"}>
          {"-" + RegexRuPrice(elementInfo.oldPrice - elementInfo.price) + " ₽"}
        </Tag>
      </div>
      <div className={styles.credit}>
        {RegexRuPrice(elementInfo.credit) + " ₽/мес"}
      </div>
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
        {elementInfo.reviewCount}{" "}
        {numDevTransform(elementInfo.reviewCount, [
          "отзыв",
          "отзыва",
          "отзывов",
        ])}
      </div>

      <div className={styles.hrTop}>
        <hr />
      </div>
      <P className={styles.description}>{elementInfo.description}</P>
      <div className={styles.feature}>
        {elementInfo.characteristics.map((c) => {
          return (
            <div key={c.name} className={styles.characteristics}>
              <div className={styles.name}>{c.name}</div>
              <div className={styles.dots}></div>
              <div className={styles.value}>{c.value}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.advBox}>
        {elementInfo.advantages && (
          <div className={styles.advantages}>
            <div className={styles.titleAdv}>Преимущества</div>
            <P>{elementInfo.advantages}</P>
          </div>
        )}
        {elementInfo.disadvantages && (
          <div className={styles.disadvantages}>
            <div className={styles.titleAdv}>Недостатки</div>
            <P>{elementInfo.disadvantages}</P>
          </div>
        )}
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
