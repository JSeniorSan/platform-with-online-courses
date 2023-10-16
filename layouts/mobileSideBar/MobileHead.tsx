"use client";

import React from "react";
import styles from "./mobileHead.module.scss";
import { Menu } from "../menu/Menu";
import Logo from "../../components/ui/Logo";

import Search from "../../components/search/Search";
function MobileHead() {
  return (
    <aside className={styles.sideBar} style={{ display: "block" }}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </aside>
  );
}

export default MobileHead;
