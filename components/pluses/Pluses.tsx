import { Hteg } from "../hteg/Hteg";
import { P } from "../paragraph/P";
import Ok from "../ui/Ok";
import { IPluses } from "./Pluses.props";
import styles from "./pluses.module.scss";
function Pluses({ page, product }: IPluses) {
  return (
    <section>
      <div className={styles.topHead}>Преимущества</div>
      {page.advantages.map((elem) => {
        return (
          <div key={elem._id} className={styles.advantagesBox}>
            <div className={styles.titleBox}>
              <Ok />
              <div className={styles.title}>{elem.title}</div>
            </div>
            <P fontHeight="18px" className={styles.pageDescription}>
              {elem.description}
            </P>
          </div>
        );
      })}
    </section>
  );
}

export default Pluses;
