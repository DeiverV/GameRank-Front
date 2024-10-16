import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "../models";

interface SliceState {
  token: string;
}

const initialState: SliceState = {
  token: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginResponse>) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = "";
    },
  },
});

export const { login, logout } = usersSlice.actions;
