import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ReviewModel } from "../../interfaces/toplevel/product.interfaces";

export interface IFormCard
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reviewsInfo: ReviewModel[];
}
