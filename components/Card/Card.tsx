import styles from "./Card.module.css";
import { ICardProps } from "./Card.props";
import cn from "classnames";

const Card = ({
  children,
  className,
  color = "white",
  ...props
}: ICardProps) => {
  return (
    <div
      className={cn(styles.cardWrapper, className, {
        [styles.blue]: color === "blue",
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
