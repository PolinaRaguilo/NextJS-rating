import styles from "./Tag.module.css";
import { ITagProps } from "./Tag.props";
import cn from "classnames";

const Tag = ({
  variant,
  children,
  className,
  size = "m",
  href,
  ...props
}: ITagProps) => {
  const classesOptions = {
    [styles.green]: variant === "green",
    [styles.red]: variant === "red",
    [styles.outlined]: variant === "outlined",
    [styles.ghost]: variant === "ghost",
    [styles.grey]: variant === "grey",
    [styles.s]: size === "s",
    [styles.m]: size === "m",
  };
  return (
    <div className={cn(styles.tag, className, classesOptions)} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
