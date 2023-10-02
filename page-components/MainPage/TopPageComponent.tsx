import { TopPage } from "./TopPageComponent.props";
import { Hteg } from "../../components/hteg/Hteg";
import { Tag } from "../../components/tag/Tag";
import styles from "../TopPageComponent.module.scss";
import Card from "../../components/card/Card";
import HHLevelCard from "../../components/hhLevelCard/HHLevelCard";
import { RegexRuPrice } from "../../helpers/helpers";
import Pluses from "../../components/pluses/Pluses";
import { P } from "../../components/paragraph/P";
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
      <Pluses page={page} product={product} />
      <P fontHeight="18px">
        При завершении очередного проекта над графикой, специалист всегда задает
        себе вопрос о дальнейших перспективах. Отличие профессиональных
        дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается
        логотип новой компании, а завтра вполне можно переключиться на
        иллюстрацию культовой книги.
      </P>
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
