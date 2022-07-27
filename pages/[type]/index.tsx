import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { TOP_PAGES_ROUTE } from "../../constants/routes";
import { IMenuItem } from "../../interfaces/menu";
import { withLayout } from "../../layout/Layout";
import { firstLevelMenu } from "../../layout/Menu/constants";

interface ITypeProps {
  menu: IMenuItem[];
  firstCategory: number;
}

const Type = ({ firstCategory }: ITypeProps) => {
  return <>{firstCategory}</>;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => `/${m.route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryName = firstLevelMenu.find(
    (menu) => menu.route === params.type
  );

  if (!firstCategoryName) {
    return {
      notFound: true,
    };
  }
  const { data: menu } = await axios.post<IMenuItem[]>(TOP_PAGES_ROUTE, {
    firstCategory: firstCategoryName.id,
  });
  return {
    props: {
      menu,
      firstCategory: firstCategoryName.id,
    },
  };
};
