import { ReactNode } from "react";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./Layout.module.css";

import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div className={styles.container}>
        {/* Header */}
        <Header />

        {/* Content */}
        <div className={styles.content}>{children}</div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
