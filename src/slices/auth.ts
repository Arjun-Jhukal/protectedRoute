import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse, tokenInitialState } from "../interface/LoginSignup";
export const tokenSlice = createSlice({
  name: "token",
  initialState: tokenInitialState,
  reducers: {
    setToken: (state, action: PayloadAction<LoginResponse>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    purgeToken: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
      localStorage.removeItem("accessToken");
    },
  },
});

export const { setToken, purgeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
