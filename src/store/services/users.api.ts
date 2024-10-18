import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetUserScores,
  UpdateUserPayload,
  UserDetails,
  UserScore,
} from "../models";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getUserScores: builder.query<UserScore[], GetUserScores>({
      query: ({ limit, page, username }) => ({
        url: `users/scores/${username}`,
        method: "GET",
        params: { page, limit },
      }),
    }),
    getUserDetails: builder.query<UserDetails, string>({
      query: (username) => `users/profile/${username}`,
    }),
    updateUser: builder.mutation<
      void,
      { userId: string; body: UpdateUserPayload }
    >({
      query: ({ userId, body }) => ({
        url: `users/profile/${userId}`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetUserDetailsQuery,
  useGetUserScoresQuery,
  useUpdateUserMutation,
} = usersApi;
