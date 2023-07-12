// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const colors = {
  "dark-grey": "#121212",
  white: "#FFFFFF",
  "white-smoke": "#F8F8F8",
  grey: "#EDEDF1",
  "foggy-grey": "#ACA99F",
  "sonic-silver": "#777777",
  warning: "#D24340",
  "light-yellow": "#FBC81D",
};

export const theme = extendTheme({
  colors,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
