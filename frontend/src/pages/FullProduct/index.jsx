import React from "react";
import { useParams } from "react-router-dom";
import styles from "./full-product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductId } from "../../redux/slice/productSlice";
import { authMe } from "../../redux/slice/authSlice";
import axios from "../../api";
import { userData } from "../../helper";

const FullProduct = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { userId } = userData();
  const { id } = useParams();
  const { data } = useSelector((state) => state.auth);

  const url = "http://localhost:1337";

  const onSubmitUpdate = async () => {
    const field = {
      cart: [...data?.cart, { productId: Number(id) }],
    };
    try {
      await axios.put(`/users/${userId}`, field);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  React.useEffect(() => {
    dispatch(getProductId(id));
    dispatch(authMe());
  }, []);

  const cartBtn = data?.cart.find((cartId) => cartId.productId === products.id);

  return (
    <div key={products.id} className={styles.wrapper}>
      <div className={styles.product}>
        {products.attributes?.image.data.map(({ attributes }) => (
          <img src={url + attributes.formats.medium.url} alt="" />
        ))}
      </div>
      <div className={styles.bag}>
        <div className={styles.name}>
          <p>{products.attributes?.name}</p>
          <h1>{products.attributes?.description}</h1>
        </div>
        <span>$ {products.attributes?.price}</span>
        <button disabled={cartBtn} onClick={() => onSubmitUpdate()}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default FullProduct;
