import { useState } from "react";
import { Button, Htag, Rating, Tag, Text } from "../components";
import { withLayout } from "./../layout/Layout";

const Home = (): JSX.Element => {
  const [rating, setRating] = useState<number>(3);

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
