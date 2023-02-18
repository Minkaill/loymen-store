import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/slice/catalogSlice";
import styles from "./catalog.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { PropagateLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Catalog = () => {
  const dispatch = useDispatch();
  const { categories, status } = useSelector((state) => state.categories);
  const url = "http://localhost:1337";
  console.log(categories);

  React.useEffect(() => {
    dispatch(getCategories());
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
      <h1>КАТАЛОГ</h1>
      <div className={styles.catalog}>
        {Array.isArray(categories) &&
          categories.map(({ attributes, id }) => (
            <div key={id} className={styles.catalog_item}>
              <div className={styles.overlay}>
                <BsArrowRight />
              </div>
              <Link to={`/category/${id}`}>
                <img
                  src={url + attributes.image.data.attributes.formats.small.url}
                  alt=""
                />
              </Link>
              <h1>{attributes.name}</h1>
            </div>
          ))}
      </div>
      <div className={styles.btn}>
        <Link to="/catalog">ПОСМОТРЕТЬ ВСЕ</Link>
      </div>
    </div>
  );
};

export default Catalog;
