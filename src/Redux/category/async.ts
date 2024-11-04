import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../libs/api";
import axios from "axios";

export const categoryCreateAsync = createAsyncThunk<undefined,{name: string}>(
  "category/create",
  async(data, thunkAPI) => {
    try {
      const response =  await api.post("/category/create",data)
      console.log(response);
      
      if (response.status !== 200) {
        console.log(response.data.massage
        );
        
      }
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data.massage);
      }
      else if (error instanceof Error) { 
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  }
)
