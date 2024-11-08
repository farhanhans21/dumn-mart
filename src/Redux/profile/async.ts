import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserProfile, IuserUpdateProfile } from "../../entities/authEntities";
import { api } from "../../libs/api";
import axios from "axios";
import { UpdateProfileSchema } from "../../schemas/profile-schema";

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
export const editProfileAsync = createAsyncThunk(
  "profile/data",
  async (data: FormData, thunkAPI) => {
    try {
      const response = await api.put("/profile/update", data);

      return response.data.profile;
    } catch(error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data.massage);
      } else if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
)
