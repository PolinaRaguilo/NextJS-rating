import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, Rating, Tag, Text } from "../components";
import { withLayout } from "./../layout/Layout";
import axios from "axios";
import { TOP_PAGES_ROUTE } from "../constants/routes";
import { IMenuItem } from "../interfaces/menu";

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}

const Home = ({ menu, firstCategory }: IHomeProps): JSX.Element => {
  const [rating, setRating] = useState<number>(3);
  console.log(menu);
  return (
    <>
      <Htag tag="h1">TEST</Htag>
      <Button variant="primary" arrow="right">
        click
      </Button>
      <Button variant="ghost" arrow="right">
        click
      </Button>
      <Text>TextText</Text>
      <Tag variant="outlined">hh.ru</Tag>
      <Rating isEditable rating={rating} setRating={setRating} />
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(TOP_PAGES_ROUTE, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
