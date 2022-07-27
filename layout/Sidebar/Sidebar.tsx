import LogoIcon from "../LogoIcon";
import Menu from "../Menu";
import { ISidebarProps } from "./Sidebar.props";
import cn from "classnames";
import styles from "./Sidebar.module.css";

const Sidebar = ({ className, ...props }: ISidebarProps) => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <LogoIcon className={styles.logo} />
      <div>поиск</div>
      <Menu />
    </div>
  );
};

export default Sidebar;
