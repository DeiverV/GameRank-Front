import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenPayload } from "../models";

interface SliceState extends TokenPayload {
  token: string;
}

const initialState: SliceState = {
  token: "",
  username: "",
  email: "",
  name: "",
  id: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginInState: (state, action: PayloadAction<SliceState>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    logoutInState: (state) => {
      state.email = "";
      state.name = "";
      state.username = "";
      state.id = "";
      state.token = "";
      state.role = "";
    },
  },
});

export const { loginInState, logoutInState } = userSlice.actions;
