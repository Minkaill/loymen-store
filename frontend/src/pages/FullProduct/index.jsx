import React from "react";
import { useParams } from "react-router-dom";
import styles from "./full-product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductId } from "../../redux/slice/productSlice";
import { authMe, postProductInCart } from "../../redux/slice/authSlice";
import axios from "../../api";
import { userData } from "../../helper";

const FullProduct = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { id } = useParams();
  const { data } = useSelector((state) => state.auth);

  const url = "http://localhost:1337";


  React.useEffect(() => {
    console.log("RENDER");
    dispatch(getProductId(id));
    dispatch(authMe());
  }, []);

  const cartBtn = data?.cart?.find(
    (cartId) => cartId.productId === products?.id
  );

  const handlePostCart = () => {
    const field = {
      cart: [...data?.cart, { productId: Number(id) }],
    };
    dispatch(postProductInCart(field));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.product}>
        {products?.attributes?.image.data.map(({ attributes }) => (
          <img src={url + attributes.formats.medium.url} alt="" />
        ))}
      </div>
      <div className={styles.bag}>
        <div className={styles.name}>
          <p>{products?.attributes?.name}</p>
          <h1>{products?.attributes?.description}</h1>
        </div>
        <span>$ {products?.attributes?.price}</span>
        <button disabled={cartBtn} onClick={() => handlePostCart()}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default FullProduct;
