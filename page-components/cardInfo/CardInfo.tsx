"use client";

import Card from "../../components/card/Card";
import { ICardInfo } from "./CardInfo.props";
import styles from "./cardInfo.module.scss";
import Image from "next/image";
import { RaitingComponent } from "../../components/rating/RaitingComponent";
import { Tag } from "../../components/tag/Tag";
import { Button } from "../../components/button/Button";
import cn from "classnames";
import { RegexRuPrice, numDevTransform } from "../../helpers/helpers";
import { P } from "../../components/paragraph/P";
import { useState } from "react";
import ReviewCard from "../../components/formCard/ReviewCard";
import DivHr from "../../components/divHr/DivHr";
import CommentForm from "../../components/CommentForm/CommentForm";
import { wrap } from "module";

export function CardInfo({ elementInfo }: ICardInfo) {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  return (
    <>
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
        <div className={styles.price}>
          {RegexRuPrice(elementInfo.price) + " ₽ "}
          <Tag color="green" size={"m"}>
            {"-" +
              RegexRuPrice(elementInfo.oldPrice - elementInfo.price) +
              " ₽"}
          </Tag>
        </div>
        <div className={styles.credit}>
          {RegexRuPrice(elementInfo.credit) + " ₽/мес"}
        </div>
        <div className={styles.rating}>
          <RaitingComponent
            rating={elementInfo.reviewAvg ?? elementInfo.initialRating}
            isEditable={false}
            style={{ display: "flex", flexWrap: "nowrap" }}
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
          <Button
            appearence="secondary"
            arrow={isReviewOpened ? "down" : "right"}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <Card
        BackColor="specific"
        className={cn(styles.reviews, {
          [styles.opened]: isReviewOpened,
          [styles.closed]: !isReviewOpened,
        })}
      >
        <ReviewCard reviewsInfo={elementInfo.reviews} />
        <DivHr />
        <CommentForm productId={elementInfo._id} />
      </Card>
    </>
  );
}
