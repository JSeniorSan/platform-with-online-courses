import React from "react";
import styles from "../layout.module.scss";
import { Menu } from "../menu/Menu";
import Logo from "../../components/ui/Logo";
async function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <Logo className={styles.logo} />
      Search
      <Menu />
    </aside>
  );
}

export default SideBar;
