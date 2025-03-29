// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const apiUrl = process.env.REACT_APP_API_URL;

// export const fetchProducts = createAsyncThunk("fetchproducts", async () => {
//   try {
//     const res = await axios.get(`${apiUrl}/product/all-products`);

//     return res.data;
//   } catch (error) {
//     throw new Error("Failed to fetch services");
//   }
// });

// const productSlice = createSlice({
//   name: "products",
//   initialState: {
//     isLoading: true,
//     data: [],
//     error: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload;
//     });
//     builder.addCase(fetchProducts.rejected, (state, action) => {
//       state.error = true;
//     });
//   },
// });

// export default productSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../Data/Home.json"; // Ensure the correct path to JSON

// Simulating API fetch using setTimeout
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.products); // Ensure you return the product array correctly
    }, 1000);
  });
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: true,
    data: [],
    error: false,
  },
  reducers: {}, // No synchronous reducers needed for now
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default productSlice.reducer;
