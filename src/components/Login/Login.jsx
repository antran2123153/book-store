import InputField from "components/Form/InputField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./Login.scss";

Login.propTypes = {
  isLogin: PropTypes.bool,
  onLogin: PropTypes.func,
};

Login.defaultProps = {
  isLogin: false,
  onLogin: null,
};

function Login(props) {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must have at least 6 characters")
      .required("Username is required."),
    password: Yup.string()
      .min(6, "Password must have at least 6 characters")
      .required("Password is required."),
  });

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <div className="login">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          return (
            <Form className="login__card">
              <h1 className="login__card-title">SIGN IN</h1>
              <FastField
                name="username"
                component={InputField}
                label="Username"
                placeholder="Enter your username"
              />

              <FastField
                name="password"
                type="password"
                component={InputField}
                label="Password"
                placeholder="Enter your password"
              />

              <div className="login__card-groupbtn">
                <Link to="/register">
                  <button className="login__card-btn login__card-signup">
                    Signup
                  </button>
                </Link>
                <button type="submit" className="login__card-btn">
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
