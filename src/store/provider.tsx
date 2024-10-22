"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const persistor = persistStore(store);

export default function StoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}> {children} </Provider>
    </PersistGate>
  );
}
