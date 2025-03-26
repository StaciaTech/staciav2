import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
export const fetchServices = createAsyncThunk("fetchservices", async () => {
  try {
    const res = await axios(`${apiUrl}/service/all-service`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    isLoading: true,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchServices.rejected, (state, action) => {
      state.error = true;
      state.isLoading = true;
    });
  },
});

export default serviceSlice.reducer;
