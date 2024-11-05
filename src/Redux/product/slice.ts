import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../entities/productEntities";
import { createProductAsync } from "./async";

interface productState {
  entities: IProduct[];
  loading: boolean;
}

const initialState: productState = {
  entities: [],
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProductAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = [...(state.entities || []), action.payload];
      })
      .addCase(createProductAsync.rejected, (state, action) => {
        state.loading = false;
      });
  },
});
export default productSlice.reducer;
