import { ITopPage, TopLevelCategory } from "../../interfaces/page";
import { IProduct } from "../../interfaces/product";

export interface ITopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: ITopPage;
  products: IProduct[];
}
