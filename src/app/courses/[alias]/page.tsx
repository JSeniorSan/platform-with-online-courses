import "../../../../styles/main.scss";
import React from "react";
import axios from "axios";
import { MenuItem } from "../../../../interfaces/menu/menu.interfaces";
import { TopPageModel } from "../../../../interfaces/toplevel/page.interfaces";
import { ProductModel } from "../../../../interfaces/toplevel/product.interfaces";
import TopPageComponent from "../../../../page-components/MainPage/TopPageComponent";
import { API } from "../../../../helpers/API";

const firstCategory = 0;

export default async function Course({
  params,
}: {
  params: { alias: string };
}) {
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  console.log(menu);

  const { data: page } = await axios.get<TopPageModel>(
    API.topPage.byAliases + params.alias
  );
  const { data: products } = await axios.post<ProductModel[]>(
    API.product.find,
    {
      category: page.category,
      limit: 10,
    }
  );

  return <TopPageComponent page={page} menu={menu} product={products} />;
}
