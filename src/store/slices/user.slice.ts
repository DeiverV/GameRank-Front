import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliceState {
  token: string;
  username: string;
  email: string;
  name: string;
  id: string;
}

const initialState: SliceState = {
  token: "",
  username: "",
  email: "",
  name: "",
  id: "",
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
    },
    logoutInState: (state) => {
      state.email = "";
      state.name = "";
      state.username = "";
      state.id = "";
      state.token = "";
    },
  },
});

export const { loginInState, logoutInState } = userSlice.actions;