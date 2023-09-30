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
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const { menu, setMenu, firstCategory } = useContext<IAppContext>(AppContext);

  const openSecondCategory = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.opened = !m.opened;
          }
          return m;
        })
      );
  };
  const buildFirstLevelMenu = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu.map((m) => {
          return (
            <div key={m.route}>
              <Link href={`/${m.route}`} style={{ textDecoration: "none" }}>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id === firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </Link>

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
          if (
            m.pages
              .map((page) => {
                return page.alias;
              })
              .includes(pathname.split("/")[2])
          ) {
            m.opened = true;
          }

          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondCategory(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelOrdinary, {
                  [styles.secondLevelActive]: m.opened,
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
        <Link
          href={`/${route}/${p.alias}`}
          key={p.alias}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` === pathname,
          })}
        >
          {p.category}
        </Link>
      );
    });
  };

  return <div className={styles.menu}>{buildFirstLevelMenu()}</div>;
}
