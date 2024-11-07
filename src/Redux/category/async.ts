import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../libs/api";
import axios from "axios";
import { ICategory } from "../../entities/categoryEntities";
import { CategorySchema } from "../../schemas/category-schema";

export const categoryCreateAsync = createAsyncThunk<
  ICategory,
  { name: string }
>("category/create", async (data, thunkAPI) => {
  try {
    const response = await api.post("/category/create", data);
    console.log(response);

    if (response.status !== 200) {
      console.log(response.data.massage);
    }
    return response.data.createCategory;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data.massage);
    } else if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
export const categoryGetAsync = createAsyncThunk<ICategory[]>(
  "/category/get-all-categories",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/category/get-all-categories");
      console.log(response);

      if (response.status !== 200) {
        console.log(response.data.massage);
      }
      return response.data.getAllCategories;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data.massage);
      } else if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
export const editCategoriesAsync = createAsyncThunk<
  ICategory,
  { id: number; name: CategorySchema }
>("category/edit", async ({ id, name }, thunkAPI) => {
  try {
    const response = await api.put(`/category/edit-categories/${id}`, name);
    console.log(response);

    if (response.status !== 200) {
      console.log(response.data.massage);
    }
    return response.data.updateCategory;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data.massage);
    } else if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const deleteCategoryAsync = createAsyncThunk<null, number>(
  "/category/delete",
  async (id, thunkAPI) => {
    try {
      const response = await api.delete(`/category/delete-categories/${id}`);

      if (response.status !== 200) {
        console.log(response.data.massage);
      }
      return response.data.id;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data.massage);
      } else if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
