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
          <span
            key={i}
            onMouseEnter={() => mouseEnterHandle(i + 1)}
            onMouseLeave={() => mouseLeaveHandle(rating)}
            tabIndex={isEditable ? 0 : -1}
            onClick={() => onClick(i + 1)}
            {...props}
          >
            <StarUi
              className={cn(styles.star, {
                [styles.filled]: i < currentRating,
              })}
            />
          </span>
        );
      }
    );
    setRatingAmount(starArr);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const mouseEnterHandle = (i: number) => {
    if (!isEditable || !setRating) return;
    changeRating(i);
  };

  const mouseLeaveHandle = (i: number) => {
    if (!isEditable || !setRating) return;
    changeRating(i);
  };

  console.log("rendered");

  return (
    <div {...props}>
      {ratingAmount.map((elem, i) => {
        return <span key={i}>{elem}</span>;
      })}
    </div>
  );
};
