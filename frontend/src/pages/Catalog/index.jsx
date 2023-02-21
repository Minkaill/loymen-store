import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCategoryById } from "../../redux/slice/catalogSlice";
import styles from "./catalog.module.scss";
import axios from "../../api";
import { authMe, postProductInFavorite } from "../../redux/slice/authSlice";
import { getProducts } from "../../redux/slice/productSlice";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [catalog, setCatalog] = React.useState([]);

  const { categories } = useSelector((state) => state.categories);
  const { data } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);
  console.log(products);

  const url = "http://localhost:1337";

  React.useEffect(() => {
    dispatch(authMe());
    dispatch(getProducts());
    axios
      .get("/categories?populate=*")
      .then(({ data }) => setCatalog(data?.data))
      .catch((error) => {
        console.warn(error);
        alert(error);
      });
  }, []);

  const postProductFavorite = async (productId) => {
    const field = {
      favorite: [...data?.favorite, { productId: Number(productId) }],
    };
    dispatch(postProductInFavorite(field));
  };

  const getProductsById = (id) => {
    dispatch(getCategoryById(id));
    dispatch(authMe());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.catalog}>
        {catalog?.map(({ attributes, id }) => (
          <h1 key={id} onClick={() => getProductsById(id)}>
            {attributes.name}
          </h1>
        ))}
      </div>

      <div className={styles.products__items}>
        {categories?.attributes?.products.data.map(({ attributes, id }) => (
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
            <div
              className={
                data?.favorite.find((fav) => fav.productId === id)
                  ? styles.btnOff
                  : styles.btn
              }
            >
              <button onClick={() => postProductFavorite(id)}></button>
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

export default Catalog;
