import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authMe } from "../../redux/slice/authSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.auth);
  console.log(data);
  React.useEffect(() => {
    dispatch(authMe());
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
