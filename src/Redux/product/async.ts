import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../libs/api";

export const createProductAsync = createAsyncThunk("product/create", async (data: FormData, thunkAPI) => {
  try {
    const response = await api.post(`/product/post-product`, data);
    return response.data.product;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data.massage);
    } else if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
