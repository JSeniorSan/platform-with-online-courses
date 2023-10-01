import React from "react";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu/menu.interfaces";
import { AppContextProvider, IAppContext } from "../../context/app.context";
async function HOK({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );

  return (
    <AppContextProvider menu={menu} firstCategory={firstCategory}>
      {children}
    </AppContextProvider>
  );
}

export default HOK;
