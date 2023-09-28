import React from "react";
import styles from "../layout.module.scss";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu/menu.interfaces";
import { Menu } from "../menu/Menu";
async function SideBar() {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );

  return (
    <aside className={styles.sideBar}>
      <Menu menuData={menu} />
    </aside>
  );
}

export default SideBar;
