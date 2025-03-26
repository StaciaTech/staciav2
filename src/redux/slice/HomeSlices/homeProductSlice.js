import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = process.env.REACT_APP_API_URL;
export const fetchHomeProducts = createAsyncThunk(
  "fetchHomeProduct",
  async () => {
    const fetchHomeProductData = await fetch(
      `${apiUrl}/product/primaryShowcaseProducts`
    );
    return fetchHomeProductData.json();
  }
);

const homeProductSlice = createSlice({
  name: "homeProducts",
  initialState: {
    isLoading: true,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHomeProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchHomeProducts.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default homeProductSlice.reducer;
