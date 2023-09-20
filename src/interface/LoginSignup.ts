import { getLocalToken } from "../helpers/authHelper";

export interface Login {
  email: string;
  password: string;
}

export interface SignUp {
  name: string;
  phoneNumber: string;
  confirmPassword: string;
  email: string;
  enterPassword: string;
}

export const initialSignupState: SignUp = {
  name: "",
  email: "",
  phoneNumber: "",
  enterPassword: "",
  confirmPassword: "",
};

export const initialLoginState: Login = {
  email: "",
  password: "",
};

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const tokenInitialState = {
  accessToken: getLocalToken(),
  refreshToken: "",
};

export interface UserResponse {
  id: number | string | null;
  name: string;
  email: string;
  phoneNumber: string;
}

export const userInitialState: UserResponse = {
  id: null,
  name: "",
  email: "",
  phoneNumber: "",
};
