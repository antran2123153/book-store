import { createSlice } from "@reduxjs/toolkit";
const userProfile = {
  fullName: null,
  username: null,
  email: null,
  imageUrl: null,
  contact: null,
  password: null,
};
export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    user: userProfile,
    isLoggedIn: false,
  },
  reducers: {
    signUp: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isLoggedIn = true;
    },
    signIn: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isLoggedIn = true;
    },
    editUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state, action) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const selectCurrentUser = (state) => state.session.user;
export const selectIsLoggedIn = (state) => state.session.isLoggedIn;
export const { signUp, logOut, editUser, signIn } = sessionSlice.actions;
export default sessionSlice.reducer;
