import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetUserScoresPayload,
  UpdateUserPayload,
  UserDetails,
  UserScoresResponse,
} from "../models";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getUserScores: builder.query<UserScoresResponse, GetUserScoresPayload>({
      query: ({ limit, page, username }) => ({
        url: `users/scores/${username}`,
        method: "GET",
        params: { page, limit },
      }),
    }),
    getUserDetails: builder.query<UserDetails, string>({
      query: (username) => `users/profile/${username}`,
    }),
    updateUser: builder.mutation<void, UpdateUserPayload>({
      query: ({ image, username, userId }) => ({
        url: `users/profile/${userId}`,
        method: "POST",
        body: { image, username },
      }),
    }),
  }),
});

export const {
  useGetUserDetailsQuery,
  useGetUserScoresQuery,
  useUpdateUserMutation,
} = usersApi;
