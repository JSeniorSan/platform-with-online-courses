import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearence: "primary" | "secondary";
  arrow?: "down" | "right" | "none";
  children: ReactNode;
}
