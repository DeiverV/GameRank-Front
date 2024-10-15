import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserDetailsToAdmin } from "../models";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<UserDetailsToAdmin[], void>({
      query: () => "users/admin",
    }),
    deleteScore: builder.mutation<void, string>({
      query: (scoreId) => ({
        url: `users/admin/scores/${scoreId}`,
        method: "DELETE",
      }),
    }),
    blockUser: builder.mutation<void, string>({
      query: (userId) => ({
        url: `users/admin/${userId}`,
        method: "PATCH",
      }),
    }),
    deleteUser: builder.mutation<void, string>({
      query: (userId) => ({
        url: `users/admin/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useBlockUserMutation,
  useDeleteUserMutation,
  useDeleteScoreMutation,
} = adminApi;
