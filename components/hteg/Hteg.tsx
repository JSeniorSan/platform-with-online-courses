import { Ihteg } from "..";
import React from "react";
export const Hteg = ({ teg, children }: Ihteg): JSX.Element => {
  switch (teg) {
    case "h1":
      return <h1 className={teg}>{children}</h1>;
    case "h2":
      return <h2 className={teg}>{children}</h2>;
    case "h3":
      return <h3 className={teg}> {children}</h3>;
    default:
      return <p>None</p>;
  }
};
