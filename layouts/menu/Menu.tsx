"use client";
import React from "react";
import { useContext } from "react";
import { AppContext, IAppContext } from "../../context/app.context";
import {
  IFirstLevelMenuItem,
  MenuItem,
  IPageItem,
} from "../../interfaces/menu/menu.interfaces";
import { TopLevelCategory } from "../../interfaces/toplevel/page.interfaces";
import CoursesIcon from "../menu/icons/Courses";
import ServicesIcon from "./icons/Services";
import BooksIcon from "./icons/Books";
import ProductsIcon from "./icons/Products";
import styles from "./menu.module.scss";
import cn from "classnames";
const firstLevelMenu: IFirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export function Menu(): JSX.Element {
  const { menu, setMenu, firstCategory } = useContext<IAppContext>(AppContext);

  const buildFirstLevelMenu = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu.map((m) => {
          return (
            <div key={m.route}>
              <a href={`/${m.route}`}>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id === firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
              {m.id === firstCategory && buildSecondLevelMenu(m.route)}
            </div>
          );
        })}
      </>
    );
  };

  const buildSecondLevelMenu = (route: string) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          return (
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel}>{m._id.secondCategory}</div>
              <div
                className={cn(styles.isOpened, {
                  [styles.isOpenedActive]: m.opened,
                })}
              >
                {buildThirdLevelMenu(route, m.pages)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevelMenu = (route: string, pages: IPageItem[]) => {
    return pages.map((p) => {
      return (
        <a
          href={`/${route}/${p.alias}`}
          key={p.alias}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: true,
          })}
        >
          {p.category}
        </a>
      );
    });
  };

  return <div className={styles.menu}>{buildFirstLevelMenu()}</div>;
}
