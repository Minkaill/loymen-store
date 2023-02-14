import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api";
import { storeUser } from "../../helper";

const initialState = {
  data: null,
  error: null,
  status: "loading",
};

export const login = createAsyncThunk("/login", async (params) => {
  try {
    const { data } = await axios.post(
      "http://localhost:1337/api/auth/local",
      params
    );
    if (data.jwt) {
      storeUser(data);
    }
    return data;
  } catch (error) {
    console.warn({
      error: error?.message,
    });
    alert(error);
  }
});

export const regist = createAsyncThunk("/register", async (params) => {
  try {
    const { data } = await axios.post(
      "http://localhost:1337/api/auth/local/register",
      params
    );
    if (data.jwt) {
      storeUser(data);
    }
    return data;
  } catch (error) {
    console.warn({
      error: error?.message,
    });
    alert(error);
  }
});

export const authMe = createAsyncThunk("/authMe", async () => {
  try {
    const { data } = await axios.get("http://localhost:1337/api/users/me");
    return data;
  } catch (error) {
    console.warn({
      error: error?.message,
    });
    alert(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(login.pending, (state) => {
        state.data = null;
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "loading";
      })

      .addCase(regist.pending, (state) => {
        state.data = null;
        state.status = "loading";
      })
      .addCase(regist.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(regist.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "loading";
      })

      .addCase(authMe.pending, (state) => {
        state.data = null;
        state.status = "loading";
      })
      .addCase(authMe.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(authMe.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "loading";
      });
  },
});

export const selectAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;