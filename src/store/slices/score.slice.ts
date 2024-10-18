import { LeaderboardPlayer, UserScore } from "../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScoreSlice {
  scores: UserScore[];
  topLeaderboardUsers: LeaderboardPlayer[];
}

const initialState: ScoreSlice = {
  scores: [],
  topLeaderboardUsers: [],
};

export const scoresSlice = createSlice({
  name: "scores",
  initialState,
  reducers: {
    setScores: (state, action: PayloadAction<UserScore[]>) => {
      state.scores = action.payload;
    },
    setTopLeaderboardUsers: (
      state,
      action: PayloadAction<LeaderboardPlayer[]>
    ) => {
      state.topLeaderboardUsers = action.payload;
    },
  },
});


export const { setScores, setTopLeaderboardUsers } = scoresSlice.actions;
