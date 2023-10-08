import { DetailedHTMLProps, FormHTMLAttributes, HTMLAttributes } from "react";
import { IReviewCard } from "./Review.interface";

export interface ICommentForm
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  productId: string;
}

export interface IFormData {
  message: string;
}
