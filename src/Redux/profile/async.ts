import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserProfile } from "../../entities/authEntities";
import { api } from "../../libs/api";
import axios from "axios";

export const getProfileAsync = createAsyncThunk<IUserProfile>(
  "profile/data",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/profile/getProfile");

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data.massage);
      } else if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
