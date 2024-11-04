import { createSlice } from "@reduxjs/toolkit";
import { categoryCreateAsync } from "./async";

export interface categoryDTO {
  name?: string;
}
interface categoryState {
  entities: categoryDTO;
  loading: boolean;
}
const initialState: categoryState = {
  entities: {} as categoryDTO,
  loading: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(categoryCreateAsync.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(categoryCreateAsync.fulfilled, (state, action) => {
        state.entities.name = action.payload;
        state.loading = false;
      })
      builder.addCase(categoryCreateAsync.rejected, (state) => {
        state.loading = false;
      });
  }
});

export default categorySlice.reducer;