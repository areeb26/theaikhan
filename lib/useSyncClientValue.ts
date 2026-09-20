import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * Reads a client-only value (matchMedia, sessionStorage, device capability)
 * without the setState-in-effect render cascade `useState` + `useEffect`
 * would cause. Renders `serverValue` during SSR/hydration, then React
 * corrects to the real client value synchronously before paint.
 */
export function useSyncClientValue<T>(getClientValue: () => T, serverValue: T): T {
  return useSyncExternalStore(noopSubscribe, getClientValue, () => serverValue);
}
