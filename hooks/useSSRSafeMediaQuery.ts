"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

/**
 * SSR-safe version of useMediaQuery that prevents hydration mismatches
 * by ensuring server and client render the same initial value
 */
export function useSSRSafeMediaQuery(
  query: string | ((theme: any) => string),
  options?: {
    defaultMatches?: boolean;
    noSsr?: boolean;
    ssrMatchMedia?: (query: string) => { matches: boolean };
  }
): boolean {
  const theme = useTheme();
  const queryString = typeof query === "function" ? query(theme) : query;

  // Default to false on server to match MUI's default behavior
  const [matches, setMatches] = useState(() => {
    if (options?.ssrMatchMedia) {
      return options.ssrMatchMedia(queryString).matches;
    }
    return options?.defaultMatches ?? false;
  });

  const mediaQuery = useMediaQuery(query, {
    ...options,
    ssrMatchMedia: options?.ssrMatchMedia || (() => ({ matches: false })),
  });

  useEffect(() => {
    setMatches(mediaQuery);
  }, [mediaQuery]);

  return matches;
}

