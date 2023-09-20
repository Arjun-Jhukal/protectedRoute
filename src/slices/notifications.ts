// notifications.js
import { createSlice } from "@reduxjs/toolkit";
import { notificationInitialState } from "../interface/Notification";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: notificationInitialState,
  reducers: {
    showNotification: (state, action) => {
      return {
        ...state,
        open: true,
        message: action.payload.message,
        variant: action.payload.variant || "info",
      };
    },
    clearNotification: (state) => {
      return {
        ...state,
        open: false,
      };
    },
  },
});

export const { showNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
