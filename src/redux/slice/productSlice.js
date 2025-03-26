import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchProducts = createAsyncThunk("fetchproducts", async () => {
  try {
    const res = await axios.get(`${apiUrl}/product/all-products`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch services");
  }
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: true,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default productSlice.reducer;
