import React from "react";
import styles from "./header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import search from "../../assets/search.png";
import user from "../../assets/user.png";
import fav from "../../assets/fav.png";
import cart from "../../assets/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { authMe } from "../../redux/slice/authSlice";
import { getProducts } from "../../redux/slice/productSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);
  const [inputOff, setInputOff] = React.useState(false);
  const [value, setValue] = React.useState("");

  const filtredProducts =
    Array.isArray(products) &&
    products?.filter((product) =>
      product?.attributes.name.toLowerCase().includes(value.toLowerCase())
    );
  console.log(filtredProducts, "searh");

  React.useEffect(() => {
    dispatch(authMe());
    dispatch(getProducts());
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={inputOff ? styles.inputOn : styles.inputOff}
          type="text"
        />
        <Link onClick={() => setInputOff(!inputOff)}>
          <img width={25} src={search} alt="" />
          {inputOff && (
            <div className={styles.filter__items}>
              {Array.isArray(filtredProducts) &&
                value.length !== 0 &&
                filtredProducts?.map(({ attributes, id }) => (
                  <p onClick={() => navigate(`/category/product/${id}`)}>
                    {attributes.name}
                  </p>
                ))}
            </div>
          )}
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
