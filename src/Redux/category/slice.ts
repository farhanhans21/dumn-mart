import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categoryCreateAsync, categoryGetAsync, deleteCategoryAsync, editCategoriesAsync } from "./async";
import { ICategory } from "../../entities/categoryEntities";

// export interface categoryDTO {
//   name?: string;
// }
interface categoryState {
  entities: ICategory[];
  loading: boolean;
}
const initialState: categoryState = {
  entities: [],
  loading: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(categoryCreateAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(categoryCreateAsync.fulfilled, (state, action) => {
      state.entities = [...(state.entities || []), action.payload]
      state.loading = false;
    });
    builder.addCase(categoryCreateAsync.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(categoryGetAsync.fulfilled, (state,action) => {
      state.loading = true;
      state.entities = action.payload
    });
    builder.addCase(categoryGetAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(categoryGetAsync.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(editCategoriesAsync.fulfilled, (state,action) => {
      state.loading = true;
      state.entities = [...(state.entities || []), action.payload]
    });
    builder.addCase(editCategoriesAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editCategoriesAsync.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(deleteCategoryAsync.fulfilled, (state,action: PayloadAction<number>) => {
      state.loading = true;
      state.entities = state.entities.filter(category => category.id !== action.payload)
    })
    builder.addCase(deleteCategoryAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCategoryAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default categorySlice.reducer;
