import React from "react";
import { useDispatch } from "react-redux";
import TextField from "../../component/atom/TextField/TextField";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useLoginMutation } from "../../services/user";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../Routes/PATH";
import { setToken } from "../../slices/auth";
import { showNotification } from "../../slices/notifications";
import { initialLoginState } from "../../interface/LoginSignup";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const validationSchema = Yup.object({
    email: Yup.string().required("Email can't be empty"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: initialLoginState,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await login(values).unwrap();

        dispatch(
          setToken({
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
          })
        );

        localStorage.setItem("refreshToken", JSON.stringify(response.refreshToken));
        localStorage.setItem("accessToken", JSON.stringify(response.accessToken));

        await navigate(PATH.DASHBOARD.ROOT);

        dispatch(
          showNotification({
            variant: "success",
            message: "Successfully Logged In",
          })
        );
      } catch (e: any) {
        if (e.status === 400) {
          formik.setErrors({
            password: e.data.message,
          });
        }
        if (e.status === 401) {
          formik.setErrors({
            email: "Couldn't find account",
          });
        }

        dispatch(
          showNotification({
            message: "Login failed. Please check your credentials.",
            variant: "error",
          })
        );
      }
    },
  });

  return (
    <div className="register__form">
      <div className="container">
        <div className="register__form__innerBox">
          <div className="register__form__header">
            <h3>Login</h3>
          </div>
          <div className="register__form__body">
            <TextField
              label="Email"
              name="email"
              placeholder="Your Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
              inputType="email"
            />

            <TextField
              label="Password"
              name="password"
              placeholder="Enter Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && !!formik.errors.password}
              helperText={formik.touched.password && formik.errors.password}
              inputType="password"
            />

            <Button disabled={!formik.dirty} variant="contained" color="primary" onClick={() => formik.handleSubmit()}>
              {isLoading ? <CircularProgress /> : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
