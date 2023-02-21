import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import search from "../../assets/search.png";
import user from "../../assets/user.png";
import fav from "../../assets/fav.png";
import cart from "../../assets/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { authMe } from "../../redux/slice/authSlice";

const Header = () => {
  const { data } = useSelector((state) => state.auth);
  const [inputOff, setInputOff] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(authMe());
  }, []);

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
        <input
          className={inputOff ? styles.inputOn : styles.inputOff}
          type="text"
        />
        <Link onClick={() => setInputOff(!inputOff)}>
          <img width={25} src={search} alt="" />
        </Link>
        <Link to="/personal-cabinet">
          <img src={user} alt="user" />
        </Link>
        <Link to="/favorite">
          <img width={25} src={fav} alt="" />
        </Link>
        <div className={styles.cart}>
          <span>{data?.cart?.length}</span>
          <Link to="/cart">
            <img width={25} src={cart} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
