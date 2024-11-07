import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../entities/productEntities";
import { createProductAsync, deleteProductAsync, editProductAsync, getAllProductAsync } from "./async";

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
      .addCase(createProductAsync.rejected, (state) => {
        state.loading = false;
      });

      builder.addCase(getAllProductAsync.fulfilled, (state, action) => {
        state.loading= true;
        state.entities = action.payload;
      })
      builder.addCase(getAllProductAsync.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(getAllProductAsync.rejected, (state) => {
        state.loading = false;
      });

      builder.addCase(editProductAsync.pending, (state) => {
        state.loading = true;
      })
      // builder.addCase(editProductAsync.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.entities = [...(state.entities || []), action.payload];
      // })
      builder.addCase(editProductAsync.rejected, (state) => {
        state.loading = false;
      });

      builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.loading = true;
        state.entities = state.entities.filter(product => product.id!== action.payload)
      })
      builder.addCase(deleteProductAsync.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(deleteProductAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default productSlice.reducer;
