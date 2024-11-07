import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../libs/api";
import { IProduct, IProductimage, updateProductDTO } from "../../entities/productEntities";

export const createProductAsync = createAsyncThunk(
  "product/create",
  async (data: FormData, thunkAPI) => {
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
  }
);

export const getAllProductAsync = createAsyncThunk<IProduct[]>(
  "product/get",
  async (_, thunkAPI) => {
    try {
      const response = await api.get(`/product/get-all-products`);
      return response.data.getAllProducts;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data.massage);
      } else if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export function convertFile(files: FileList): IProductimage[] {
  return Array.from(files).map((file) => ({
    url: URL.createObjectURL(file) // Generates a temporary URL for each file
  }));
}

export const editProductAsync = createAsyncThunk<
updateProductDTO,{id: number, data: FormData}>(
  "product/edit",
  async ( {id,data}, thunkAPI) => {
    try {

      const response = await api.put(`/product/update-product/${id}`, data);
      return response.data.updateProduct;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data);
      } else if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const deleteProductAsync = createAsyncThunk<null,number>(
  "product/delete",
  async (id: number, thunkAPI) => {
    try {
      const response = await api.delete(`/product/delete-product/${id}`)
      if (response.status !== 200) {
        console.log(response.data.massage);
      }
      return response.data.id
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data.massage);
      } else if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  })