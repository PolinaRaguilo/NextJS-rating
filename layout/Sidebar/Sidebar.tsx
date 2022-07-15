import { ISidebarProps } from "./Sidebar.props";

const Sidebar = ({ ...props }: ISidebarProps) => {
  return <div {...props}>sidebar</div>;
};

export default Sidebar;
