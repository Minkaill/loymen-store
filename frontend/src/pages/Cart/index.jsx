import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authMe } from "../../redux/slice/authSlice";
import { getProducts } from "../../redux/slice/productSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);

  React.useEffect(() => {
    dispatch(authMe());
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (typeof data === "object") {
    return (
      <div>
        <div></div>
      </div>
    );
  }
};

export default Cart;
