import React from "react";
import styles from "./favorite.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/productSlice";
import { authMe } from "../../redux/slice/authSlice";
import axios from "../../api";
import { userData } from "../../helper";

const Favorite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, status } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);
  const { userId } = userData();
  console.log(data);

  const url = "http://localhost:1337";

  const cart =
    Array.isArray(products) &&
    products?.filter((product) =>
      data?.favorite.some((favoriteId) => product.id === favoriteId.productId)
    );

  const deleteProductInFavorite = async (productId) => {
    const field = {
      favorite: [
        ...data?.favorite.filter((fav) => fav.productId !== productId),
      ],
    };
    try {
      await axios.put(`/users/${userId}`, field);
    } catch (error) {
      console.warn(error);
      alert(error);
    }
  };

  React.useEffect(() => {
    dispatch(authMe());
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.wrapper}>
      <h1>ИЗБРАННОЕ</h1>
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
                <button onClick={() => deleteProductInFavorite(id)}></button>
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

export default Favorite;
