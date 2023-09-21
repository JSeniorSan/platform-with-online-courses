import { ReactNode } from "react";

export interface Ihteg {
  teg: "h1" | "h2" | "h3";
  children: ReactNode;
}
