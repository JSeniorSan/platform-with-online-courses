"use client";
import SortIcon from "../ui/SortIcon";
import { ISort } from "./Sort.props";
import styles from "./sort.module.scss";
import cn from "classnames";
import { SortEnum } from "./Sort.props";

function Sort({ sort, setSort, className, ...props }: ISort) {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span
        className={cn({
          [styles.active]: sort === SortEnum.Rating,
        })}
        onClick={() => setSort(SortEnum.Rating)}
      >
        <SortIcon className={styles.icon} /> По рейтингу
      </span>

      <span
        className={cn({
          [styles.active]: sort === SortEnum.Price,
        })}
        onClick={() => setSort(SortEnum.Price)}
      >
        <SortIcon className={styles.icon} /> По цене
      </span>
    </div>
  );
}

export default Sort;
