// Import Dependencies
import { useEffect, useMemo, useState } from "react";
import { useLocation, useMatchRoute } from "@tanstack/react-router";

// Local Imports
import { useBreakpointsContext } from "@/app/contexts/breakpoint/context";
import { useSidebarContext } from "@/app/contexts/sidebar/context";
import { navigation } from "@/app/navigation";
import { MainPanel } from "./MainPanel";
import { PrimePanel } from "./PrimePanel";

// ----------------------------------------------------------------------

export type SegmentPath = string | undefined;

export function Sidebar() {
  const { pathname } = useLocation();
  const matchRoute = useMatchRoute();
  const { name, lgAndDown } = useBreakpointsContext();
  const { isExpanded, close } = useSidebarContext();

  // Choose a sensible default (dashboard → first item)
  const dashboardPath =
    navigation.find((item) => item.id === "dashboard")?.path ??
    navigation[0]?.path;

  const computeActivePath = () => {
    const found = navigation.find(
      (item) =>
        typeof item.path === "string" &&
        !!matchRoute({ to: item.path as string, fuzzy: true }),
    );
    return (found?.path as string | undefined) ?? dashboardPath;
  };

  // Initialize from current location (not a stale memo)
  const [activeSegmentPath, setActiveSegmentPath] =
    useState<SegmentPath>(computeActivePath);

  const currentSegment = useMemo(
    () => navigation.find((item) => item.path === activeSegmentPath),
    [activeSegmentPath],
  );

  // Keep in sync with location (runs on mount + updates)
  useEffect(() => {
    setActiveSegmentPath(computeActivePath());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // matchRoute is stable; pathname changes trigger recompute

  // Auto-close sidebar on breakpoint changes
  useEffect(() => {
    if (lgAndDown && isExpanded) close();
  }, [name, lgAndDown, isExpanded, close]);

  return (
    <>
      <MainPanel
        nav={navigation}
        activeSegmentPath={activeSegmentPath}
        setActiveSegmentPath={setActiveSegmentPath}
      />
      <PrimePanel
        close={close}
        currentSegment={currentSegment}
        pathname={pathname}
      />
    </>
  );
}
