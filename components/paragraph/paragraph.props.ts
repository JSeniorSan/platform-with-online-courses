import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface IParagraph
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  fontHeight?: "16px" | "14px" | "18px";
  children: ReactNode;
}
