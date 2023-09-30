"use client";
import { createContext } from "react";
import React from "react";
import { TopLevelCategory } from "../interfaces/toplevel/page.interfaces";
import { MenuItem } from "../interfaces/menu/menu.interfaces";
import { useState } from "react";
import { ReactNode } from "react";
export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setCategory?: (newFirstCategory: number) => void;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  children,
  menu,
}: IAppContext & { children: ReactNode }): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const [firstCategory, setFirstCategory] = useState<number>(0);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };
  const setCategory = (newFirstCategory: number) => {
    setFirstCategory(newFirstCategory);
  };

  return (
    <AppContext.Provider
      value={{ menu: menuState, setMenu, firstCategory, setCategory }}
    >
      {children}
    </AppContext.Provider>
  );
};
