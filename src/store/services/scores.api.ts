import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CreateScorePayload,
  GetLeaderboardPayload,
  LeaderboardResponse,
} from "../models";

export const scoresApi = createApi({
  reducerPath: "scoresApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getGames: builder.query<string[], void>({
      query: () => "scores/games",
    }),
    getLeaderboard: builder.query<LeaderboardResponse, GetLeaderboardPayload>({
      query: (params) => ({
        url: "scores/leaderboard",
        method: "GET",
        params,
      }),
    }),
    createScore: builder.mutation<void, CreateScorePayload>({
      query: ({ game, score, userId }) => ({
        url: `scores/${userId}`,
        method: "POST",
        body: {
          game,
          score,
        },
      }),
    }),
  }),
});

export const {
  useCreateScoreMutation,
  useGetLeaderboardQuery,
  useGetGamesQuery,
} = scoresApi;
