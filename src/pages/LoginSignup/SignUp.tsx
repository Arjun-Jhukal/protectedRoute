import * as React from "react";
import TextField from "../../component/atom/TextField/TextField";
import * as Yup from "yup";
import { useFormik } from "formik";

import { SignUp, initialSignupState } from "../../interface/LoginSignup";

import { useCreateUserMutation } from "../../services/user";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/Hooks";
import { PATH } from "../../Routes/PATH";

export default function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [createUser, { isLoading }] = useCreateUserMutation();

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Name must contain at least 2 character").required("Name is required"),
    email: Yup.string().required("Email is required"),
    phoneNumber: Yup.string().required("Phone is required"),
    enterPassword: Yup.string().min(4, "Password must contain at least 4 character").required("Password is Required"),
    confirmPassword: Yup.string().min(4, "Password must contain at least 4 character").required("Password is Required"),
  });

  const formik = useFormik<SignUp>({
    initialValues: initialSignupState,
    validationSchema,
    onSubmit: async (values) => {
      try {
        await createUser({
          ...values,
          phoneNumber: `+977${values.phoneNumber}`,
        });

        formik.resetForm();
        navigate(PATH.LOGIN.ROOT);
      } catch (e: any) {
        console.log(e);
        if (e.status === 302) {
          formik.setErrors({
            email: e.data.message,
          });
        } else if (e.status === 400) {
          formik.setErrors({
            phoneNumber: e.data.message,
          });
        }
      }
    },
  });

  return (
    <div className="register__form">
      <div className="container">
        <div className="register__form__innerBox">
          <div className="register__form__header">
            <h3>Sign Up</h3>
          </div>
          <div className="register__form__body">
            <TextField
              label="Name"
              name="name"
              placeholder="Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && !!formik.errors.name}
              helperText={formik.touched.name && formik.errors.name}
              inputType="text"
            />
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
              label="Phone"
              name="phoneNumber"
              placeholder="Your Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              inputType="text"
            />
            <TextField
              label="New Password"
              name="enterPassword"
              placeholder="Enter New Password"
              value={formik.values.enterPassword}
              onChange={formik.handleChange}
              error={formik.touched.enterPassword && !!formik.errors.enterPassword}
              helperText={formik.touched.enterPassword && formik.errors.enterPassword}
              inputType="password"
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              inputType="password"
            />
            {/* <Button variant="contained" type="submit" value="Sign Up" onClick={formik.handleSubmit} isDisabled={!formik.dirty} /> */}

            <Button disabled={!formik.dirty} variant="contained" color="primary" onClick={() => formik.handleSubmit()}>
              {isLoading ? <CircularProgress /> : "Sign Up"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
