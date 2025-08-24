// import { matchByPath } from "@tanstack/react-router";

/**
 * Checks if the given path matches the current pathname.
 *
 * @param The path to check against the current location.
 * @param The current path of the browser.
 * @returns Returns `true` if the path matches the current pathname, otherwise `false`.
 */
export function isRouteActive(
  path: string | undefined,
  pathname: string,
): boolean {
  // Check if the given path matches the current pathname using react-router's matchPath
  // return path ? !!matchByPath({ path, end: false }, pathname) : false;
  return false
}
