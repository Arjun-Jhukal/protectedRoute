import React from "react";
import TextField from "../../component/atom/TextField/TextField";
import * as Yup from "yup";
import { useFormik } from "formik";

import { initialSignupState } from "../../interface/LoginSignup";
// import Button from "../../component/atom/Button";
import { useCreateUserMutation } from "../../services/user";
import { Button } from "@mui/material";

export default function SignUpPage() {
  const [createUser, { isLoading }] = useCreateUserMutation();

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Name must contain at least 2 character").required("Name is required"),
    email: Yup.string().required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    password: Yup.string().min(4, "Password must contain at least 4 character").required("Password is Required"),
    confirmPassword: Yup.string().min(4, "Password must contain at least 4 character").required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: initialSignupState,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await createUser(values);
        console.log(response);

        console.log(values);
      } catch (e) {
        console.log(e);
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
              name="password"
              placeholder="Enter New Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && !!formik.errors.password}
              helperText={formik.touched.password && formik.errors.password}
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
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
