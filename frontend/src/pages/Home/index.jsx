import React from "react";
import Catalog from "../../components/Catalog";
import Main from "../../components/Main";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Main />
      <Catalog />
    </div>
  );
};

export default Home;
