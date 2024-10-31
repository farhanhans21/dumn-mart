import { createSlice } from "@reduxjs/toolkit";
import { Iuser, IUserProfile } from "../../complain/entities/authEntities";
import { loginAsync } from "./async";

export interface userStateDTO {
  name?: string;
  user?: Iuser;
  username?: string;
  profile?: IUserProfile;
  token?: string;
}

interface userState {
  entities: userStateDTO;
  loading: boolean;
}

const initialState: userState = {
  entities: {} as userStateDTO,
  loading: false,
};

const loginSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    LOGOUT: (state) => {
      state.entities.token = "";
      state.entities.token = undefined;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.entities.token = action.payload;
    });
    builder.addCase(loginAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { LOGOUT } = loginSlice.actions;
export default loginSlice.reducer