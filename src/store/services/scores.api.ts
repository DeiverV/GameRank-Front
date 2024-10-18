import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CreateScorePayload,
  GetLeaderboardPayload,
  LeaderboardPlayer,
} from "../models";

export const scoresApi = createApi({
  reducerPath: "scoresApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getLeaderboard: builder.query<LeaderboardPlayer[], GetLeaderboardPayload>({
      query: (params) => ({
        url: "scores/leaderboard",
        method: "GET",
        params,
      }),
    }),
    createScore: builder.mutation<CreateScorePayload, void>({
      query: (body) => ({
        url: "scores",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateScoreMutation, useGetLeaderboardQuery } = scoresApi;
