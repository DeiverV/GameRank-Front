"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import StoreProvider from "@store/provider";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: Readonly<ProvidersProps>) {
  const router = useRouter();

  return (
    <StoreProvider>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </StoreProvider>
  );
}
