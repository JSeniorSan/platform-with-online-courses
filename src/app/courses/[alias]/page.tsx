import "../../../../styles/main.scss";
import React from "react";
import axios from "axios";
import { MenuItem } from "../../../../interfaces/menu/menu.interfaces";
import { TopPageModel } from "../../../../interfaces/toplevel/page.interfaces";
import { ProductModel } from "../../../../interfaces/toplevel/product.interfaces";

const firstCategory = 0;
// export async function generateStaticParams() {
//   const { data: menu } = await axios.post<MenuItem[]>(
//     process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
//     {
//       firstCategory,
//     }
//   );

//   return menu.flatMap((m) => m.pages.map((p) => "/courses/" + p.alias));
// }

export default async function Course({
  params,
}: {
  params: { alias: string };
}) {
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  const { data: page } = await axios.get<TopPageModel>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias
  );
  const { data: product } = await axios.post<ProductModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
    {
      category: page.category,
      limit: 10,
    }
  );

  return <div>{product.length}</div>;
}
