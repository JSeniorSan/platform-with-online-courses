"use client";
import { TopPage } from "./TopPageComponent.props";
import { Hteg } from "../../components/hteg/Hteg";
import { Tag } from "../../components/tag/Tag";
import styles from "../TopPageComponent.module.scss";
import Card from "../../components/card/Card";
import HHLevelCard from "../../components/hhLevelCard/HHLevelCard";
import { RegexRuPrice } from "../../helpers/helpers";
import Pluses from "../../components/pluses/Pluses";
import Sort from "../../components/sort/Sort";
import { SortEnum } from "../../components/sort/Sort.props";
import { useReducer } from "react";
import { SortReducer } from "./sort.reducer";
import { CardInfo } from "../cardInfo/CardInfo";

function TopPageComponent({ page, product, menu }: TopPage) {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    SortReducer,
    { sort: SortEnum.Rating, products: product }
  );
  const setSorted = (sorted: SortEnum) => {
    dispatchSort({ type: sorted });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.topTitle}>
        <Hteg teg="h1">{page.title}</Hteg>
        <Tag color={"grey"} size={"m"} className={styles.tag}>
          {product.length}
        </Tag>
        <Sort sort={sort} setSort={setSorted} />
      </div>

      {sortedProducts &&
        sortedProducts.length > 0 &&
        sortedProducts.map((elem) => {
          return <CardInfo key={elem._id} elementInfo={elem} />;
        })}
      <div className={styles.hhBlock}>
        <div className={styles.head}>
          <Hteg teg="h2">{`Вакансии - ${page.category}`}</Hteg>
          <Tag color="red" size="m" className={styles.tag}>
            hh.ru
          </Tag>
        </div>
        <div className={styles.hhCards}>
          <Card BackColor="white" className={styles.card}>
            <div className={styles.title}>Всего вакансий</div>
            <span>{RegexRuPrice(page.hh.count)}</span>
          </Card>
          <HHLevelCard
            firstPrice={RegexRuPrice(page.hh.juniorSalary)}
            secondPrice={RegexRuPrice(page.hh.middleSalary)}
            thirdPrice={RegexRuPrice(page.hh.seniorSalary)}
            line={true}
          />
        </div>
      </div>
      {page.advantages &&
        page.advantages.length > 0 &&
        page.advantages[0].title !== "" && (
          <div className={styles.pluses}>
            <Pluses page={page} product={product} />
            {page.seoText && (
              <div
                className={styles.seo}
                dangerouslySetInnerHTML={{ __html: page.seoText }}
              />
            )}
          </div>
        )}

      <div className={styles.topHead}>{page.tagsTitle}</div>
      <div className={styles.tagsBox}>
        {page.tags.map((tag) => {
          return (
            <Tag color="primary" size="m" key={tag} className={styles.tags}>
              {tag[0].toUpperCase() + tag.slice(1)}
            </Tag>
          );
        })}
      </div>
    </div>
  );
}

export default TopPageComponent;
