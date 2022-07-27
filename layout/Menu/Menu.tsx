import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import FirstLevelMenu from "./FirstLevelMenu";

const Menu = () => {
  const { firstCategory } = useContext(AppContext);

  return (
    <div>
      <FirstLevelMenu firstCategory={firstCategory} />
    </div>
  );
};

export default Menu;
