import InputField from "components/Form/InputField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import * as Yup from "yup";
import "./Register.scss";

Register.propTypes = {
  isLogin: PropTypes.bool,
  onLogin: PropTypes.func,
};

Register.defaultProps = {
  isLogin: false,
  onLogin: null,
};

function Register(props) {
  const initialValues = {
    username: "",
    password: "",
    repassword: "",
    fullname: "",
    birthday: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must have at least 6 characters")
      .required("Username is required."),
    password: Yup.string()
      .min(6, "Password must have at least 6 characters")
      .required("Password is required."),
    repassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords is not match"
    ),
    firstname: Yup.string(),
    lastname: Yup.string(),
    birthday: Yup.date(),
    phoneNumber: Yup.number(),
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
              <h1 className="login__card-title">SIGN UP</h1>
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

              <FastField
                name="repassword"
                type="password"
                component={InputField}
                label="Confirm password"
                placeholder="Enter confirm password"
              />

              <FastField
                name="fullname"
                component={InputField}
                label="Full name"
                placeholder="Enter your name"
              />

              <FastField
                name="birthday"
                type="date"
                component={InputField}
                label="Date of birth"
                placeholder="Enter your birthday"
              />
              <FastField
                name="phoneNumber"
                component={InputField}
                label="Phone number"
                placeholder="Enter your phone number"
              />
              <div className="login__card-groupbtn">
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

export default Register;
