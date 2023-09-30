import React from "react";
import styles from "../layout.module.scss";
import { Menu } from "../menu/Menu";

async function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <Menu />
    </aside>
  );
}

export default SideBar;
