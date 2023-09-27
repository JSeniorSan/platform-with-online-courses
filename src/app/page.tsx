// "use client";
import "../../styles/main.scss";

import { useState } from "react";
import { RaitingComponent } from "../../components/rating/Raiting";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu/menu.interfaces";
export default function Home({ menu }: HomePage): JSX.Element {
  // const [state, setState] = useState<number>(4);
  return (
    <article>
      {/* <RaitingComponent rating={state} isEditable={true} setRating={setState} /> */}

      {menu.map((m) => {
        return <li key={m._id.secondCategory}>{m._id.secondCategory}</li>;
      })}
    </article>
  );
}

export const getStaticProps: GetStaticProps<HomePage> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  console.log(menu);

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomePage {
  menu: MenuItem[];
  firstCategory: number;
}
