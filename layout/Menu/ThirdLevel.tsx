import { IPageItem } from "../../interfaces/menu";
import cn from "classnames";
import styles from "./Menu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

interface IProps {
  pages: IPageItem[];
  route: string;
}

const ThirdLevel = ({ pages, route }: IProps) => {
  const router = useRouter();
  return (
    <>
      {pages.map((page) => {
        return (
          <Link href={`/${route}/${page.alias}`}>
            <a
              className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]:
                  `/${route}/${page.alias}` === router.asPath,
              })}
            >
              {page.category}
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default ThirdLevel;
