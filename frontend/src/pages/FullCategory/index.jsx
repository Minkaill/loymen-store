import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { getCategoryById } from "../../redux/slice/catalogSlice";
import styles from "./fullcategory.module.scss";

const FullCategory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { categories, status } = useSelector((state) => state.categories);
  const url = "http://localhost:1337";

  React.useEffect(() => {
    dispatch(getCategoryById(id));
  }, []);

  if (status === "loading") {
    return (
      <div className={styles.loader}>
        <PropagateLoader color="#000" />
      </div>
    );
  }

  if (typeof categories.attributes === "object") {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Мужские {categories.attributes.name}</h1>
          <span>{categories.attributes.description}</span>
        </div>

        <div className={styles.products__items}>
          {categories.attributes.products.data.map(({ attributes, id }) => (
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
                <p>{attributes.name}</p>
                <span>$ {attributes.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default FullCategory;
