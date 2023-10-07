import { DetailedHTMLProps, FormHTMLAttributes, HTMLAttributes } from "react";

export interface ICommentForm
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  productId: string;
}
