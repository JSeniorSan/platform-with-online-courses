import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITag
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  color: "red" | "green" | "grey" | "primary" | "default";
  href?: string;
  size: "s" | "m";
}
