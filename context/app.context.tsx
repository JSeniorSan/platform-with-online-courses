"use client";

import { createContext } from "react";
import React from "react";
import { TopLevelCategory } from "../interfaces/toplevel/page.interfaces";
import { MenuItem } from "../interfaces/menu/menu.interfaces";
import { useState } from "react";
import { ReactNode } from "react";
export interface IAppContext {
  menu: MenuItem[];
  //   firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  //   firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>([]);

  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
