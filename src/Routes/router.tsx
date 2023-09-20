import React from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginSignup/Login";
import SignUpPage from "../pages/LoginSignup/SignUp";
import Dashboard from "../pages/Dashboard";
import Private from "./Private";
import { useAppSelector } from "../store/Hooks";

export default function RoutesCollection(): JSX.Element {
  // const token = useAppSelector((state) => state.token.accessToken);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route
          path="/dashboard"
          element={
            <Private>
              <Dashboard />
            </Private>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
