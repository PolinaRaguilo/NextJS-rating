import { KeyboardEvent, useEffect, useState } from "react";
import styles from "./Rating.module.css";
import { IRatingProps } from "./Rating.props";
import StarIcon from "./StarIcon";
import cn from "classnames";

const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: IRatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    createRating(rating);
  }, [rating]);

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    createRating(i);
  };

  const onClickRating = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  const createRating = (currentRating: number) => {
    const newArray = ratingArray.map((el, i) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClickRating(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(newArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((el, i) => {
        return <span key={i}>{el}</span>;
      })}
    </div>
  );
};

export default Rating;
