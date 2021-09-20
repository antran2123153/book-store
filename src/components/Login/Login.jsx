// import axios from "axios";
import { signIn } from "features/session/sessionSlice";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export default function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const goToRegister = () => {
    history.push("/register");
  };
  const onChangeUserName = ({ target }) => {
    const newUserName = target.value;
    setUserName(newUserName);
  };
  const onChangePassword = ({ target }) => {
    const newPassword = target.value;
    setPassword(newPassword);
  };
  const validateAccount = async () => {
    console.log(userName);
    console.log(password);
    dispatch(signIn({ username: userName, fullName: userName }));
    history.push("/home");
    // try {
    //   const logIn = { userName: userName, password: password };
    //   const resp = await axios.post('https://reqres.in/api/login', logIn);
    //   if (resp.status !== 404) {
    //     console.log(resp.data.token);
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  };
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    const userObj = response.profileObj;
    const name = userObj.name;
    const email = userObj.email;
    const imageUrl = userObj.imageUrl;
    dispatch(
      signIn({
        fullName: name,
        username: email,
        email: email,
        imageUrl: imageUrl,
      })
    );
    history.push("/home");
  };
  return (
    <main>
      <section className="relative w-full h-full py-10 min-h-screen">
        <div
          className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-contain"
          style={{
            backgroundImage:
              "url(" + require("assets/images/bookWallpaper.jpg").default + ")",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div className="container mx-auto px-4 h-full py-4">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-500 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <GoogleLogin
                      render={(renderProps) => (
                        <button
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                          type="button"
                        >
                          <img
                            alt="..."
                            className="w-5 mr-1"
                            src={require("assets/images/google.svg").default}
                          />
                          Google
                        </button>
                      )}
                      clientId="38195780971-2khqdc32dvhtqrds4432s1e2j6b1mtob.apps.googleusercontent.com"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-400 text-center mb-3 font-bold">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        UserName
                      </label>
                      <input
                        type="userName"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => onChangeUserName(e)}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        value={password}
                        onChange={onChangePassword}
                      />
                    </div>

                    <div className="text-center mt-6">
                      <button
                        onClick={validateAccount}
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={goToRegister}
                        className="bg-blueGray-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        Create New Account
                      </button>
                      <button
                        className="bg-blueGray-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        Forgot Password?
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
