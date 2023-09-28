"use client";
import React from "react";
import { useContext } from "react";
import { AppContext, IAppContext } from "../../context/app.context";
import { MenuItem } from "../../interfaces/menu/menu.interfaces";
import { useEffect } from "react";
export function Menu({ menuData }: { menuData: MenuItem[] }): JSX.Element {
  const { menu, setMenu } = useContext<IAppContext>(AppContext);

  useEffect(() => {
    if (setMenu) {
      return setMenu(menuData);
    }
  }, [menu, setMenu, menuData]);
  return (
    <ul>
      {menu.map((m) => {
        return <ol key={m._id.secondCategory}>{m._id.secondCategory}</ol>;
      })}
    </ul>
  );
}
