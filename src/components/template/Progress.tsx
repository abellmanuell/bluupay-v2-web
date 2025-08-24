// Import Dependencies
import { useRouterState } from "@tanstack/react-router";

// Local Imports
import { NProgress } from "@/components/shared/NProgress";

// ----------------------------------------------------------------------

export function Progress() {
  const routerState = useRouterState();

  return <NProgress isAnimating={routerState.isLoading} />;
}
