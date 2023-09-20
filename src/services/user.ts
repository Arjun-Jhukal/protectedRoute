import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Login, LoginResponse, SignUp, UserResponse } from "../interface/LoginSignup";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8081`,
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation<string, SignUp>({
      query: (values) => ({
        url: "http://localhost:8081/usersWithoutAuth/signUpUser",
        method: "POST",
        body: values,
      }),
    }),
    login: builder.mutation<LoginResponse, Login>({
      query: (values) => ({
        url: `http://localhost:8081/login`,
        method: "POST",
        body: values,
      }),
    }),
    getLoginUser: builder.query<UserResponse, string>({
      query: (token) => ({
        url: `http://localhost:8081/usersWithAuth/getLoginUserInfo`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginMutation, useGetLoginUserQuery } = userApi;
