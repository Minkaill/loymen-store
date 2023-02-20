import React from "react";
import styles from "./favorite.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/productSlice";
import { authMe, deleteProductInFavorite } from "../../redux/slice/authSlice";
import { PropagateLoader } from "react-spinners";

const Favorite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, status } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);

  const url = "http://localhost:1337";

  const favorite =
    Array.isArray(products) &&
    products?.filter((product) =>
      data?.favorite.some((favoriteId) => product.id === favoriteId.productId)
    );

  const deleteFav = (productId) => {
    const field = {
      favorite: [
        ...data?.favorite.filter((fav) => fav.productId !== productId),
      ],
    };
    dispatch(deleteProductInFavorite(field));
  };

  React.useEffect(() => {
    dispatch(authMe());
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return (
      <div className={styles.loader}>
        <PropagateLoader color="#000" />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1>ИЗБРАННОЕ</h1>
      <div className={styles.products__items}>
        {Array.isArray(favorite) &&
          favorite?.map(({ attributes, id }) => (
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
                <button onClick={() => deleteFav(id)}></button>
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
