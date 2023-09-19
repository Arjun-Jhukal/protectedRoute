import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignUp } from "../interface/LoginSignup";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8081`,
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation<object, SignUp>({
      query: (payload) => ({
        url: "http://localhost:8081/usersWithoutAuth/signUpUser",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
