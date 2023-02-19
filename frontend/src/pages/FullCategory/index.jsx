import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { userData } from "../../helper";
import { getCategoryById } from "../../redux/slice/catalogSlice";
import styles from "./fullcategory.module.scss";
import axios from "../../api";
import { authMe } from "../../redux/slice/authSlice";

const FullCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { userId } = userData();
  const { categories, status } = useSelector((state) => state.categories);
  const { data } = useSelector((state) => state.auth);

  const url = "http://localhost:1337";

  const onSubmitUpdate = async (productId) => {
    const field = {
      favorite: [...data?.favorite, { productId: Number(productId) }],
    };
    try {
      await axios.put(`/users/${userId}`, field);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  React.useEffect(() => {
    dispatch(getCategoryById(id));
    dispatch(authMe());
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
      <div className={styles.title}>
        <h1>
          {categories.attributes?.name === "Обувь" ? "Мужская" : "Мужские"}{" "}
          {categories.attributes?.name}
        </h1>
        <span>{categories.attributes?.description}</span>
      </div>

      <div className={styles.products__items}>
        {categories.attributes?.products.data.map(({ attributes, id }) => (
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
              style={{
                overflow:
                  data?.favorite.find((fav) => fav.productId === id) &&
                  "hidden",
              }}
              className={styles.btn}
            >
              <button onClick={() => onSubmitUpdate(id)}></button>
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

export default FullCategory;
