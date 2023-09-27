import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let schema = Yup.object().shape({
    email: Yup.string()
      .email("Email should be valid!")
      .required("Email is required!"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  console.log(user);
  useEffect(() => {
    if (user !== null || isSuccess) {
      navigate("admin");
    } else {
      alert("Not");
    }
  }, [user, isLoading, isError, isSuccess, message]);

  return (
    <div
      className="py-5"
      style={{ background: " #ffd333", minHeight: "100vh" }}
    >
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="email"
            label="Email Address"
            id="email"
            val={formik.values.email}
            onCh={formik.handleChange}
          ></CustomInput>
          <div className="validation">
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
          <CustomInput
            type="password"
            name="password"
            label="Password"
            id="password"
            onCh={formik.handleChange}
            val={formik.values.password}
          ></CustomInput>
          <div className="validation">
            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mb-3 text-end">
            <Link to="/forgot-password ">Forgot password?</Link>
          </div>
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-decoration-none text-center"
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
