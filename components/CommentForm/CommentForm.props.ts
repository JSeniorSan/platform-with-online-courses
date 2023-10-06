import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICommentForm
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productId: string;
}
