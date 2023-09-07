import React from "react";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <div
      className="py-5"
      style={{ background: " #ffd333", minHeight: "100vh" }}
    >
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <form action="">
          <CustomInput
            type="text"
            label="Email Address"
            id="email"
          ></CustomInput>
          <CustomInput
            type="password"
            label="Password"
            id="password"
          ></CustomInput>
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#ffd333" }}
            type="Submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
