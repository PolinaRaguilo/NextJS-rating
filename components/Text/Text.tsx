import styles from "./Text.module.css";
import { ITextProps } from "./Text.props";
import cn from "classnames";

const Text = ({ size = "m", children, className, ...props }: ITextProps) => {
  const sizeClassesOptions = {
    [styles.s]: size === "s",
    [styles.m]: size === "m",
    [styles.l]: size === "l",
  };
  return (
    <p className={cn(styles.text, className, sizeClassesOptions)} {...props}>
      {children}
    </p>
  );
};

export default Text;
