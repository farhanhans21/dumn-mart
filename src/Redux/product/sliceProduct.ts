import { createSlice } from "@reduxjs/toolkit"
import {IProduct}  from "../../entities/productEntities"
import { getProductByIdAsync } from "./async"

interface productState {
  entities : IProduct
  loading : boolean
}

const initialState : productState = {
  entities : {} as IProduct,
  loading : false
}

const productSlice2 = createSlice({
  name: 'product2',
  initialState : initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getProductByIdAsync.fulfilled, (state, action) => {
      state.loading= true;
      state.entities = action.payload;
    })
    builder.addCase(getProductByIdAsync.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getProductByIdAsync.rejected, (state) => {
      state.loading = false;
    });
}
})
export default productSlice2.reducer;