import { firstLevelMenu } from "./constants";
import styles from "./Menu.module.css";
import cn from "classnames";
import { TopLevelCategory } from "../../interfaces/page";
import SecondLevelMenu from "./SecondLevelMenu";
import Link from "next/link";

interface IProps {
  firstCategory: TopLevelCategory;
}

const FirstLevelMenu = ({ firstCategory }: IProps) => {
  return (
    <>
      {firstLevelMenu.map((item) => {
        return (
          <div key={item.id}>
            <Link href={`/${item.route}`}>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: item.id === firstCategory,
                  })}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </a>
            </Link>
            {item.id === firstCategory && <SecondLevelMenu firstMenu={item} />}
          </div>
        );
      })}
    </>
  );
};

export default FirstLevelMenu;
