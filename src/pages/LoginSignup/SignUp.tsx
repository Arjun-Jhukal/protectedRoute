import React from "react";
import TextField from "../../component/atom/TextField/TextField";

export default function SignUpPage() {
  return (
    <div className="register__form">
      <div className="container">
        <div className="register__form__innerBox">
          <div className="register__form__header">
            <h3>Sign Up</h3>
          </div>
          <div className="register__form__body">
            <TextField />
          </div>
        </div>
      </div>
    </div>
  );
}
