import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { account : null };

export const userSlice = createSlice({
  name: "user",
  initialState:  initialStateValue ,
  reducers: {
    login: (state, action) => {
      state.account = action.payload.account;
    },
    logout: (state) => {
      state.account = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
