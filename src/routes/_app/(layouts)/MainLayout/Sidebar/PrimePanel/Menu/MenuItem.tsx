// Import Dependencies
import { Link, useMatchRoute, useRouteContext, rootRouteId } from "@tanstack/react-router";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

// Local Imports
import { useBreakpointsContext } from "@/app/contexts/breakpoint/context";
import { useSidebarContext } from "@/app/contexts/sidebar/context";
import { Badge } from "@/components/ui";
import { NavigationTree } from "@/@types/navigation";
import { ColorType } from "@/constants/app";

// ----------------------------------------------------------------------

type RootContext = Record<
  string,
  { info?: { val?: string; color?: ColorType } }
>;

export function MenuItem({ data }: { data: NavigationTree }) {
  const { path, transKey, id, title: defaultTitle } = data;

  const { t } = useTranslation();
  const { lgAndDown } = useBreakpointsContext();
  const { close } = useSidebarContext();

  // ✅ Access root context the official way
  const rootContext = useRouteContext({ from: rootRouteId }) as RootContext;
  const info = rootContext?.[id]?.info;

  // Translated label fallback
  const title = transKey ? t(transKey) : defaultTitle;

  // ✅ Active check using useMatchRoute
  const matchRoute = useMatchRoute();
  const isActive = matchRoute({ to: path, fuzzy: false });

  const handleMenuItemClick = () => {
    if (lgAndDown) close();
  };

  return (
    <Link
      to={path as string}
      onClick={handleMenuItemClick}
      className={clsx(
        "outline-hidden transition-colors duration-300 ease-in-out",
        isActive
          ? "font-medium text-primary-600 dark:text-primary-400"
          : "text-gray-600 hover:text-gray-900 dark:text-dark-200 dark:hover:text-dark-50"
      )}
    >
      <div
        data-menu-active={isActive}
        style={{ height: "34px" }}
        className="flex items-center justify-between text-xs-plus tracking-wide"
      >
        <span className="mr-1 truncate">{title}</span>
        {info?.val && (
          <Badge
            color={info.color ?? "neutral"}
            variant="soft"
            className="h-4.5 min-w-[1rem] shrink-0 p-[5px] text-tiny-plus"
          >
            {info.val}
          </Badge>
        )}
      </div>
    </Link>
  );
}
