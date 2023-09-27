import React from "react";
import styles from "../layout.module.scss";
import { format } from "date-fns";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.page}>
        Tekai project © {format(new Date(), "yyy")} Все права защищены
      </p>
      <p className={styles.page}></p>
      <a href="#" target="_blank" className={styles.page}>
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank" className={styles.page}>
        Политика конфиденциальности
      </a>
    </footer>
  );
}

export default Footer;
