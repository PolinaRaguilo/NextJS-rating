import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";
import {
  FIND_PRODUCT_BY_NAME_ROUTE,
  PAGE_BY_ALIAS_ROUTE,
  TOP_PAGES_ROUTE,
} from "../../constants/routes";
import { IMenuItem } from "../../interfaces/menu";
import { ITopPage, TopLevelCategory } from "../../interfaces/page";
import { IProduct } from "../../interfaces/product";
import { withLayout } from "../../layout/Layout";
import { firstLevelMenu } from "../../layout/Menu/constants";
import { TopPageComponent } from "../../page-components";

interface ITopPageProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: TopLevelCategory;
  page: ITopPage;
  products: IProduct[];
}

const TopPage = ({
  menu,
  firstCategory,
  page,
  products,
}: ITopPageProps): JSX.Element => {
  return (
    <TopPageComponent
      page={page}
      firstCategory={firstCategory}
      products={products}
    />
  );
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const menuItem of firstLevelMenu) {
    const { data: menu } = await axios.post<IMenuItem[]>(TOP_PAGES_ROUTE, {
      firstCategory: menuItem.id,
    });
    paths = paths.concat(
      menu.flatMap((m) => m.pages.map((p) => `/${menuItem.route}/${p.alias}`))
    );
  }

  return {
    paths,
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

  try {
    const { data: menu } = await axios.post<IMenuItem[]>(TOP_PAGES_ROUTE, {
      firstCategory: firstCategoryName.id,
    });
    if (!menu.length) {
      return {
        notFound: true,
      };
    }
    const { data: page } = await axios.get<ITopPage>(
      PAGE_BY_ALIAS_ROUTE(params.alias as string)
    );
    const { data: products } = await axios.post<IProduct[]>(
      FIND_PRODUCT_BY_NAME_ROUTE,
      {
        category: page.category,
        limit: 10,
      }
    );
    return {
      props: {
        menu,
        firstCategory: firstCategoryName.id,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
