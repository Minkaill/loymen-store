import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import search from "../../assets/search.png";
import user from "../../assets/user.png";
import fav from "../../assets/fav.png";
import cart from "../../assets/cart.png";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/catalog">КАТАЛОГ</Link>
        <Link to="/lookbook">LOOKBOOK</Link>
        <Link to="/brands">О БРЕНДЕ</Link>
        <Link to="/imformation">ИНФОРМАЦИЯ</Link>
      </nav>

      <div className={styles.logo}>
        <Link to="/">LOYMEN</Link>
      </div>

      <div className={styles.user_nav}>
        <img width={25} src={search} alt="" />
        <Link to="/login">
          <img width={25} src={user} alt="" />
        </Link>
        <img width={25} src={fav} alt="" />
        <img width={25} src={cart} alt="" />
      </div>
    </header>
  );
};

export default Header;
