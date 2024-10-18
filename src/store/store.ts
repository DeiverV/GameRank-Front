import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import { adminApi, authApi, scoresApi, usersApi } from "./services";
import { scoresSlice, usersSlice } from "./slices";

export const store = configureStore({
  reducer: {
    [usersSlice.name]: usersSlice.reducer,
    [scoresSlice.name]: scoresSlice.reducer,

    // Apis
    [authApi.reducerPath]: authApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [scoresApi.reducerPath]: scoresApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      adminApi.middleware,
      usersApi.middleware,
      scoresApi.middleware,
    ]),
});

export type IRootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
