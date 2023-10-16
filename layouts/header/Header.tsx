"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import styles from "../layout.module.scss";
import { useState } from "react";
import ModalWindow from "../../page-components/ModalWindow/ModalWindow";
function Header() {
  const [modalState, setModalState] = useState(false);
  const onClick = () => {
    setModalState(!modalState);
  };

  return (
    <header className={styles.header}>
      <span className={styles.menu}>
        <RxHamburgerMenu onClick={onClick} size={"50px"} />
      </span>

      <ModalWindow modalState={modalState} />
    </header>
  );
}

export default Header;
