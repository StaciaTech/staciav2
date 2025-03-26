import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import serviceReducer from "./slice/serviceSlice";
import homeProductReducer from "./slice/HomeSlices/homeProductSlice";
import homeServiceReducer from "./slice/HomeSlices/homeServiceSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    service: serviceReducer,
    homeProduct: homeProductReducer,
    homeService: homeServiceReducer,
  },
});
