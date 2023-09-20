import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInitialState, UserResponse } from "../interface/LoginSignup";

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserResponse>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
    },
    removeUser: (state) => {
      state.id = null;
      state.email = "";
      state.name = "";
      state.phoneNumber = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
