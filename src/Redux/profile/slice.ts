import { createSlice } from "@reduxjs/toolkit";
import { userStateDTO } from "../auth/slice";
import { getProfileAsync } from "./async";
import { IUserProfile } from "../../entities/authEntities";

// export type profileDTO = userStateDTO;

interface profileState {
  entities: IUserProfile;
  loading: boolean;
}
const initialState: profileState = {
  entities: {} as IUserProfile,
  loading: false,
}; 

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // Add your reducers here
  },
  extraReducers: (builder) => {
    // Add your extraReducers here
    builder.addCase(getProfileAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProfileAsync.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = false;
    });
    builder.addCase(getProfileAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});
export default profileSlice.reducer;
