import {
  DetailedHTMLProps,
  HTMLAttributes,
  FunctionComponent,
  SVGAttributes,
} from "react";
export interface IRaiting
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable: boolean;
  rating: number;
  setRating?: (raiting: number) => void;
}

export interface IStarUi
  extends FunctionComponent<SVGAttributes<SVGAElement>> {}
