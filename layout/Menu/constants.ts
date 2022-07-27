import { IFirstLevelMenuItem } from "../../interfaces/menu";
import { TopLevelCategory } from "../../interfaces/page";
import { HatIcon } from "./icons/HatIcon";
import { CloudIcon } from "./icons/CloudIcon";
import { BookIcon } from "./icons/BookIcon";
import { BoxIcon } from "./icons/BoxIcon";

export const firstLevelMenu: IFirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: HatIcon(),
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: CloudIcon(),
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: BookIcon(),
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Товары",
    icon: BoxIcon(),
    id: TopLevelCategory.Products,
  },
];
