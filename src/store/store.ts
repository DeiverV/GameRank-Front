import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import { adminApi, authApi, scoresApi, usersApi } from "./services";

export const store = configureStore({
  reducer: {
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

setupListeners(store.dispatch);
