import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api";

const initialState = {
  categories: [],
  status: "loading",
  error: null,
};

export const getCategories = createAsyncThunk("/getCategories", async () => {
  try {
    const { data } = await axios.get("/categories?populate=*");
    return data.data;
  } catch (error) {
    console.warn(error);
    alert(error);
  }
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.categories = [];
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = "loaded";
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.categories = [];
        state.status = "loading";
        state.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
