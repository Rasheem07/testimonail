'use client'
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

type Props = {
  children: React.ReactNode;
};

export const queryClient = new QueryClient();

export default function ReactQueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
