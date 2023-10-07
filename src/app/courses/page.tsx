import "../../../styles/main.scss";
import React from "react";
import styles from "./courses.module.scss";
import LeftArrow from "../../../components/ui/LeftArrow";
async function Courses() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Лучшие <span className={styles.online}>онлайн</span> курсы
      </h1>
      <LeftArrow className={styles.arrow} />
    </div>
  );
}
export default Courses;
