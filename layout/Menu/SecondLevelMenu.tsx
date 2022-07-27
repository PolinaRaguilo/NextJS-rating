import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import ThirdLevel from "./ThirdLevel";
import { IFirstLevelMenuItem } from "../../interfaces/menu";
import { useRouter } from "next/router";

interface IProps {
  firstMenu: IFirstLevelMenuItem;
}

const SecondLevelMenu = ({ firstMenu }: IProps) => {
  const { menu, setMenu } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    const newMenu = menu.map((item) => {
      if (item._id.secondCategory === secondCategory) {
        item.isOpened = !item.isOpened;
      }
      return item;
    });
    setMenu && setMenu(newMenu);
  };

  return (
    <div className={styles.secondLevelWrapper}>
      {menu.map((item) => {
        if (
          item.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
        ) {
          item.isOpened = true;
        }

        return (
          <div
            key={item._id.secondCategory}
            onClick={() => openSecondLevel(item._id.secondCategory)}
          >
            <div className={styles.secondLevelTitle}>
              {item._id.secondCategory}
            </div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: item.isOpened,
              })}
            >
              <ThirdLevel pages={item.pages} route={firstMenu.route} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SecondLevelMenu;
