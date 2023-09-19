export interface Login {
  email: string;
  password: string;
}

export interface SignUp extends Login {
  name: string;
  phoneNumber: string;
  confirmPassword: string;
}

export const initialSignupState: SignUp = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

export const initialLoginState: Login = {
  email: "",
  password: "",
};
