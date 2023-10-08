import {
  DetailedHTMLProps,
  HTMLAttributes,
  FunctionComponent,
  SVGAttributes,
} from "react";
import { FieldError } from "react-hook-form";
export interface IRaiting
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable: boolean;
  rating: number;
  setRating?: (raiting: number) => void;
  error?: FieldError;
}

export interface IStarUi
  extends FunctionComponent<SVGAttributes<SVGAElement>> {}
