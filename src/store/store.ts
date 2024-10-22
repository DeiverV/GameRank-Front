import { setupListeners } from "@reduxjs/toolkit/query/react";

import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { adminApi, authApi, scoresApi, usersApi } from "./services";
import { scoresSlice, userSlice } from "./slices";

const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [scoresSlice.name]: scoresSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [adminApi.reducerPath]: adminApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [scoresApi.reducerPath]: scoresApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [userSlice.name],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER],
      },
    }).concat([
      authApi.middleware,
      adminApi.middleware,
      usersApi.middleware,
      scoresApi.middleware,
    ]),
});

export type IRootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
