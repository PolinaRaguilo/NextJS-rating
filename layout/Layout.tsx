import { FunctionComponent } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ILayoutProps } from "./Layout.props";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.css";
import { AppContextProvider, IAppContext } from "../context/app.context";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
