import React from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginSignup/Login";
import SignUpPage from "../pages/LoginSignup/SignUp";
import Dashboard from "../pages/Dashboard";

export default function RoutesCollection(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
