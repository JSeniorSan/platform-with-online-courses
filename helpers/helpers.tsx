import { IFirstLevelMenuItem } from "../interfaces/menu/menu.interfaces";
import { TopLevelCategory } from "../interfaces/toplevel/page.interfaces";
import BooksIcon from "../layouts/menu/icons/Books";
import CoursesIcon from "../layouts/menu/icons/Courses";
import ProductsIcon from "../layouts/menu/icons/Products";
import ServicesIcon from "../layouts/menu/icons/Services";

export const firstLevelMenu: IFirstLevelMenuItem[] = [
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

export const RegexRuPrice = (price: number): string =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
