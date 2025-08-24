// Import Dependencies
import clsx from "clsx";
import {
  Link,
  useMatchRoute,
  useRouteContext,
  rootRouteId,
} from "@tanstack/react-router";
import invariant from "tiny-invariant";
import { useTranslation } from "react-i18next";

// Local Imports
import { useBreakpointsContext } from "@/app/contexts/breakpoint/context";
import { useSidebarContext } from "@/app/contexts/sidebar/context";
import { Badge } from "@/components/ui";
import { NavigationTree } from "@/@types/navigation";

// If your router context provides per-nav "info" by id, this is its shape:
type RootMenuInfoContext = Record<
  string,
  { info?: { val?: string; color?: string } }
>;

// ----------------------------------------------------------------------

export function MenuItem({ data }: { data: NavigationTree }) {
  const { transKey, path, id, title: defaultTitle } = data;
  const { lgAndDown } = useBreakpointsContext();
  const { close } = useSidebarContext();
  const { t } = useTranslation();

  invariant(path, "[MenuItem] Path is required for navigation item");

  const title = transKey ? t(transKey) : defaultTitle;

  // Read the context stored on the ROOT route (created with createRootRouteWithContext)
  const rootCtx = useRouteContext({ from: rootRouteId }) as RootMenuInfoContext;
  const info = rootCtx?.[id]?.info;

  // Active state (exact match)
  const matchRoute = useMatchRoute();
  const isActive = !!matchRoute({ to: path as string, fuzzy: false });

  const handleMenuItemClick = () => {
    if (lgAndDown) close();
  };

  return (
    <Link
      to={path as string}
      onClick={handleMenuItemClick}
      id={id}
      className={clsx(
        "text-xs-plus flex items-center justify-between px-2 tracking-wide outline-hidden transition-[color,padding-left,padding-right] duration-300 ease-in-out hover:ltr:pl-4 hover:rtl:pr-4",
        isActive
          ? "text-primary-600 dark:text-primary-400 font-medium"
          : "dark:text-dark-200 dark:hover:text-dark-50 dark:focus:text-dark-50 text-gray-600 hover:text-gray-900 focus:text-gray-900"
      )}
    >
      <div
        data-menu-active={isActive}
        className="flex min-w-0 items-center justify-between"
        style={{ height: "34px" }}
      >
        <div className="flex min-w-0 items-center space-x-2 rtl:space-x-reverse">
          <div
            className={clsx(
              isActive
                ? "bg-primary-600 dark:bg-primary-400 opacity-80"
                : "opacity-50 transition-all",
              "size-1.5 rounded-full border border-current"
            )}
          />
          <span className="truncate">{title}</span>
        </div>
        {info?.val && (
          <Badge
            color={info.color as any}
            className="h-5 min-w-[1.25rem] shrink-0 rounded-full p-[5px]"
          >
            {info.val}
          </Badge>
        )}
      </div>
    </Link>
  );
}
