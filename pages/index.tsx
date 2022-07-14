import { Button, Htag, Text } from "../components";

const Home = (): JSX.Element => {
  return (
    <div>
      <Htag tag="h1">TEST</Htag>
      <Button variant="primary" arrow="right">
        click
      </Button>
      <Button variant="ghost" arrow="right">
        click
      </Button>
      <Text>TextText</Text>
    </div>
  );
};

export default Home;
