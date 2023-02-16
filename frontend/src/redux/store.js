import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slice/authSlice";
import catalogSlice from "./slice/catalogSlice";
import productSlice from "./slice/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productSlice,
    categories: catalogSlice,
  },
});
