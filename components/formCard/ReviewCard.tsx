"use client";
import styles from "./reviewCard.module.scss";
import { IFormCard } from "./ReviewCard.props";
import Avatar from "../ui/Avatar";
import { ru } from "date-fns/locale";
import { format } from "date-fns";
import { RaitingComponent } from "../rating/RaitingComponent";
function ReviewCard({ reviewsInfo }: IFormCard) {
  return (
    <div className={styles.wrapper}>
      {reviewsInfo.map((rev) => {
        return (
          <section key={rev._id} className={styles.review}>
            <span className={styles.image}>
              <Avatar />
            </span>
            <span className={styles.name}>{rev.name + ":  "}</span>
            <div className={styles.title}>{rev.title}</div>
            <div className={styles.date}>
              {format(new Date(rev.createdAt), "dd MMMM yyyy", { locale: ru })}
            </div>
            <RaitingComponent
              rating={rev.rating}
              isEditable={false}
              className={styles.rating}
            />
            <article className={styles.description}>{rev.description}</article>
          </section>
        );
      })}
    </div>
  );
}

export default ReviewCard;
