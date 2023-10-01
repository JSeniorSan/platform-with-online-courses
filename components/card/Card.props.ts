import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICard
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  BackColor: "specific" | "white";
  children: ReactNode;
}
