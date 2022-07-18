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
import { ITopPage } from "../../interfaces/page";
import { IProduct } from "../../interfaces/product";
import { withLayout } from "../../layout/Layout";

interface ICourseProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
  page: ITopPage;
  products: IProduct[];
}
const firstCategory = 0;

const Course = ({
  menu,
  firstCategory,
  page,
  products,
}: ICourseProps): JSX.Element => {
  const [rating, setRating] = useState<number>(3);
  console.log(products);
  return <></>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<IMenuItem[]>(TOP_PAGES_ROUTE, {
    firstCategory,
  });
  return {
    paths: menu.flatMap((m) => m.pages.map((p) => `/courses/${p.alias}`)),
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

  const { data: menu } = await axios.post<IMenuItem[]>(TOP_PAGES_ROUTE, {
    firstCategory,
  });

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
      firstCategory,
      page,
      products,
    },
  };
};
