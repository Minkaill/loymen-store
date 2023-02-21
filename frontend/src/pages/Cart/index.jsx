import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authMe } from "../../redux/slice/authSlice";
import { getProducts } from "../../redux/slice/productSlice";
import styles from "./cart.module.scss";
import { useNavigate } from "react-router-dom";
import { deleteProductInCart } from "../../redux/slice/authSlice";
import { PropagateLoader } from "react-spinners";
import { userData } from "../../helper";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [amount, setAmount] = React.useState(1);
  const { jwt } = userData();
  const { data, status } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);

  const url = "http://localhost:1337";

  const cart =
    Array.isArray(products) &&
    products?.filter((product) =>
      data?.cart?.some((cartId) => product.id === cartId.productId)
    );

  console.log(cart, "CART");

  const deleteProductCart = (productId) => {
    const field = {
      cart: [...data?.cart.filter((cart) => cart.productId !== productId)],
    };
    dispatch(deleteProductInCart(field));
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

  const totalPrice =
    Array.isArray(cart) &&
    cart?.reduce(function (sum, current) {
      return sum + current.attributes.price;
    }, 0);
  console.log(totalPrice, "PRICE");

  return (
    <div className={styles.wrapper}>
      <h1>КОРЗИНА</h1>
      {cart?.length > 0 ? (
        <div className={styles.cart}>
          <div className={styles.products}>
            {Array.isArray(cart) &&
              cart?.map(({ attributes, id }) => (
                <>
                  <div key={id} className={styles.product_item}>
                    <div className={styles.image}>
                      <img
                        src={
                          url +
                          attributes?.image.data[1]?.attributes.formats
                            .thumbnail.url
                        }
                        alt=""
                      />
                    </div>
                    <div className={styles.product_info}>
                      <div className={styles.name}>
                        <h2>{attributes.name}</h2>
                        <button onClick={() => deleteProductCart(id)}></button>
                      </div>
                      <div className={styles.size}>
                        <p>SIZE: {attributes.size}</p>
                      </div>
                      <span>$ {attributes.price}</span>
                      <div className={styles.amount}>
                        <button></button>
                        <div className={styles.select_amout}>
                          <p>Количество:</p>
                          <select
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          >
                            {[...Array(20)].map((el, index) => (
                              <option>{index + 1}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {cart?.length !== 1 && <hr />}
                </>
              ))}
          </div>

          <div className={styles.payment}>
            {!jwt && (
              <div className={styles.not_auth}>
                <p>Войдите в систему, для оформления заказа!</p>
                <button onClick={() => navigate("/")}>ВОЙТИ</button>
                <hr />
              </div>
            )}
            <div className={styles.total}>
              <div className={styles.order_total}>
                <span>Стоимость заказа</span>
                <p>$ {Math.floor(totalPrice)}</p>
              </div>
              <div className={styles.order_total}>
                <span>Доставка</span>
                <p>БЕСПЛАТНО</p>
              </div>
              <hr />
              <div className={styles.order_total_hr}>
                <span>ИТОГО</span>
                <p>$ {Math.floor(totalPrice)}</p>
              </div>
              <button>ПРОДОЛЖИТЬ ОФОРМЛЕНИЕ ЗАКАЗА</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.empty_cart}>
          <img src="https://iticsystem.com/img/empty-cart.png" alt="" />
          <div className={styles.empty_title}>
            <span>ВАША КОРЗИНА ПУСТА</span>
            <button onClick={() => navigate("/")}>ПЕРЕЙТИ К ПОКУПКАМ</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
