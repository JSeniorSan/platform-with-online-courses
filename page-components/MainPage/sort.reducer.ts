import { SortEnum } from "../../components/sort/Sort.props";
import { ProductModel } from "../../interfaces/toplevel/product.interfaces";

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating };

export interface ISortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

export const SortReducer = (
  state: ISortReducerState,
  action: SortActions
): ISortReducerState => {
  switch (action.type) {
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((x, y) => (x.price > y.price ? 1 : -1)),
      };

    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((x, y) => {
          return x.initialRating > y.initialRating ? -1 : 1;
        }),
      };
    default:
      throw new Error("Неверный тип сортировки");
  }
};
