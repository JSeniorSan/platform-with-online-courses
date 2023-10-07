import LeftArrow from "../../../components/ui/LeftArrow";
import "../../../styles/main.scss";
import styles from "../courses/courses.module.scss";
function Products() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Лучшие <span className={styles.online}>онлайн</span> продукты
      </h1>
      <LeftArrow className={styles.arrow} />
    </div>
  );
}

export default Products;
