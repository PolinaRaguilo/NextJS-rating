import { FunctionComponent } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ILayoutProps } from "./Layout.props";
import Sidebar from "./Sidebar";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
