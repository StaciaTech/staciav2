import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchHomeServices = createAsyncThunk(
  "fetchHomeService",
  async () => {
    const fetchHomeServiceData = await fetch(
      `${apiUrl}/service/primaryShowcaseService`
    );
    return fetchHomeServiceData.json();
  }
);

const homeServiceSlice = createSlice({
  name: "homeServices",
  initialState: {
    isLoading: true,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeServices.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHomeServices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchHomeServices.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default homeServiceSlice.reducer;
