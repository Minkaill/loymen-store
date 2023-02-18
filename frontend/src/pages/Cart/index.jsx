import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authMe } from "../../redux/slice/authSlice";
import { getProducts } from "../../redux/slice/productSlice";
import styles from "./cart.module.scss";

const Cart = () => {
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);
  console.log(products);

  const url = "http://localhost:1337";

  const cart =
    Array.isArray(products) &&
    products?.filter((product) =>
      data?.cart.some((cartId) => product.id === cartId.productId)
    );

  React.useEffect(() => {
    dispatch(authMe());
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.products__items}>
        {Array.isArray(cart) &&
          cart?.map(({ attributes, id }) => (
            <div key={id} className={styles.product}>
              <div className={styles.gallery_container}>
                <div className={styles.thumbnails}></div>
                <div className={styles.slides}>
                  {attributes.image.data?.map(({ attributes, id }) => (
                    <div key={id}>
                      <img
                        src={url + attributes.formats.small.url}
                        alt="product"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.btn}>
                <button></button>
              </div>
              <div className={styles.info_product}>
                <p onClick={() => navigate(`/category/product/${id}`)}>
                  {attributes.name}
                </p>
                <span>$ {attributes.price}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
