import { SortEnum } from "../../../components/Sort/Sort.props";
import { IProduct } from "../../../interfaces/product";

export type SortActions =
  | {
      type: SortEnum.Price;
    }
  | { type: SortEnum.Rating };

export interface SortReducerState {
  sort: SortEnum;
  products: IProduct[];
}

export const sortReducer = (
  state: SortReducerState,
  action: SortActions
): SortReducerState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) => {
          return a.initialRating > b.initialRating ? -1 : 1;
        }),
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => {
          return a.initialRating > b.initialRating ? 1 : -1;
        }),
      };
    default:
      throw new Error("Неверный тип сортировки");
  }
};
