import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api";

const initialState = {
  products: null,
  status: "loading",
  error: null,
};

export const getProducts = createAsyncThunk("/getProducts", async () => {
  try {
    const { data } = await axios.get("/products?populate=*");
    return data.data;
  } catch (error) {
    console.warn(error);
    alert(error);
  }
});

export const getProductId = createAsyncThunk("/getProductId", async (id) => {
  try {
    const { data } = await axios.get(`/products/${id}?populate=*`);
    return data.data;
  } catch (error) {
    console.warn(error);
    alert(error);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.products = [];
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "loaded";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.products = [];
        state.status = "loading";
        state.error = action.payload;
      })

      .addCase(getProductId.pending, (state) => {
        state.products = [];
        state.status = "loading";
      })
      .addCase(getProductId.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "loaded";
      })
      .addCase(getProductId.rejected, (state, action) => {
        state.products = [];
        state.status = "loading";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
