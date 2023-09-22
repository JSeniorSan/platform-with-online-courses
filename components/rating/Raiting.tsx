"use client";
import { StarUi } from "./StarUi";
import { useState, useEffect } from "react";
import { IRaiting } from "./raiting.props";
import cn from "classnames";
import styles from "./raiting.module.css";

export const RaitingComponent = ({
  rating,
  isEditable = false,
  setRating,
  ...props
}: IRaiting): JSX.Element => {
  useEffect(() => {
    changeRating(rating);
  }, [rating]);

  const [ratingAmount, setRatingAmount] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const changeRating = (currentRating: number) => {
    const starArr = ratingAmount.map(
      (_rat: JSX.Element, i: number): JSX.Element => {
        return (
          <StarUi
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
            })}
            key={i}
            {...props}
          />
        );
      }
    );
    setRatingAmount(starArr);
  };

  return (
    <div {...props}>
      {ratingAmount.map((elem, i) => {
        return <span key={i}>{elem}</span>;
      })}
    </div>
  );
};
