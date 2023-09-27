import React from "react";

import styles from "../layout.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.page}>OwlTop © 2020 - 2021 Все права защищены</p>
      <p className={styles.page}></p>
      <p className={styles.page}>Пользовательское соглашение</p>
      <p className={styles.page}>Политика конфиденциальности</p>
    </footer>
  );
}

export default Footer;
