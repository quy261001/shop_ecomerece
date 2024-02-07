'use client';

import { useSession } from "next-auth/react";

/**
 * Checks if the user is authenticated.
 *
 * @return {boolean} Returns true if the user is authenticated, false otherwise.
 */
export function useIsAuthenticated() {
  const { status } = useSession();

  return {
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',
  };
}
