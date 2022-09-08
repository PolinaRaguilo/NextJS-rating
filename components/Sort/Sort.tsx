import { ISortProps, SortEnum } from "./Sort.props";
import styles from "./Sort.module.css";
import { SortIcon } from "./icons/SortIcon";
import cn from "classnames";

const Sort = ({ setSort, sort, className }: ISortProps) => {
  const isRatingFilter = sort === SortEnum.Rating;
  const isPriceFilter = sort === SortEnum.Price;
  return (
    <div className={cn(styles.sortWrapper, className)}>
      <span
        className={cn(styles.filterWrapper, {
          [styles.active]: isRatingFilter,
        })}
        onClick={() => setSort(SortEnum.Rating)}
      >
        {isRatingFilter && <SortIcon />}
        <p>По рейтингу</p>
      </span>
      <span
        className={cn(styles.filterWrapper, {
          [styles.active]: isPriceFilter,
        })}
        onClick={() => setSort(SortEnum.Price)}
      >
        {isPriceFilter && <SortIcon />}
        <p>По цене</p>
      </span>
    </div>
  );
};

export default Sort;
