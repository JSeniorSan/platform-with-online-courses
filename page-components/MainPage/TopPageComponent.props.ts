import { MenuItem } from "../../interfaces/menu/menu.interfaces";
import { TopPageModel } from "../../interfaces/toplevel/page.interfaces";
import { ProductModel } from "../../interfaces/toplevel/product.interfaces";

export interface TopPage {
  page: TopPageModel;
  product: ProductModel[];
  menu: MenuItem[];
}
