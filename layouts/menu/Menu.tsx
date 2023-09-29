"use client";
import React from "react";
import { useContext } from "react";
import { AppContext, IAppContext } from "../../context/app.context";
import { MenuItem } from "../../interfaces/menu/menu.interfaces";
import { useEffect } from "react";
export function Menu(): JSX.Element {
  const { menu, setMenu, firstCategory } = useContext<IAppContext>(AppContext);

  // useEffect(() => {
  //   setMenu && setMenu();
  // }, [menu, setMenu]);

  // setMenu && setMenu()
  return (
    <ul>
      {menu.map((m) => {
        return <ol key={m._id.secondCategory}>{m._id.secondCategory}</ol>;
      })}
    </ul>
  );
}
