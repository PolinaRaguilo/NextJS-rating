import { IHeaderProps } from "./Header.props";

const Header = ({ ...props }: IHeaderProps) => {
  return <div {...props}>header</div>;
};

export default Header;
