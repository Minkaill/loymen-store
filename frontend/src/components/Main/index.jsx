import React from "react";
import { Link } from "react-router-dom";
import styles from "./main.module.scss";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.osen}>
        <h1>ОСЕНЬ 2023</h1>
        <Link to="/catalog">В КАТАЛОГ</Link>
      </div>
      <div className={styles.rasprodaja__novinki}>
        <div className={styles.raprodaja}>
          <h1>РАСПРОДАЖА</h1>
          <Link to="/catalog">В КАТАЛОГ</Link>
        </div>
        <div className={styles.novinki}>
          <h1>НОВИНКИ</h1>
          <Link to="/catalog">В КАТАЛОГ</Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
