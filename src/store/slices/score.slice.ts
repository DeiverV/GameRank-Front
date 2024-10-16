import { UserScore } from "../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScoreSlice {
  scores: UserScore[];
}

const initialState: ScoreSlice = {
  scores: [],
};

export const scoresSlice = createSlice({
  name: "scores",
  initialState,
  reducers: {
    setScores: (state, action: PayloadAction<UserScore[]>) => {
      state.scores = action.payload;
    },
  },
});

export const { setScores } = scoresSlice.actions;
