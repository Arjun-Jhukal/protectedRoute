import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/user";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { tokenSlice } from "../slices/auth";
import { notificationSlice } from "../slices/notifications";
import { userSlice } from "../slices/user";

export const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
    notification: notificationSlice.reducer,
    user: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
