import { IButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "./ArrowIcon";

const Button = ({
  variant,
  arrow = "none",
  children,
  className,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: variant === "primary",
        [styles.ghost]: variant === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
            [styles.right]: arrow === "right",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
