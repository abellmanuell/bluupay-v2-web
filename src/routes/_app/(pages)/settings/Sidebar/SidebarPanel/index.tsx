// Import Dependencies
import clsx from "clsx";
import {
  ChatBubbleBottomCenterIcon,
  DocumentMagnifyingGlassIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

// Local Imports
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button, ScrollShadow } from "@/components/ui";
import { createScopedKeydownHandler } from "@/utils/dom/createScopedKeydownHandler";
import { useThemeContext } from "@/app/contexts/theme/context";
import { useBreakpointsContext } from "@/app/contexts/breakpoint/context";
import { useSidebarContext } from "@/app/contexts/sidebar/context";
import { settings } from "@/app/navigation/segments/settings";
import { navigationIcons } from "@/app/navigation/icons";

// ----------------------------------------------------------------------

export function SidebarPanel() {
  const { cardSkin } = useThemeContext();

  return (
    <div
      className={clsx(
        "prime-panel flex flex-col",
        cardSkin === "shadow"
          ? "shadow-soft dark:shadow-dark-900/60"
          : "dark:border-dark-600/80 ltr:border-r rtl:border-l",
      )}
    >
      <div
        className={clsx(
          "flex h-full grow flex-col bg-white ltr:pl-(--main-panel-width) rtl:pr-(--main-panel-width)",
          cardSkin === "shadow" ? "dark:bg-dark-750" : "dark:bg-dark-900",
        )}
      >
        <Header />
        <ScrollShadow className="grow">
          <ul className="space-y-1.5 px-2 font-medium" data-menu-list>
            {settings.childs?.map((item) => (
              <li key={item.path}>
                <MenuItem
                  title={item.title ?? ""}
                  transKey={item.transKey ?? ""}
                  icon={item.icon ?? ""}
                  path={String(item.path ?? "")}
                />
              </li>
            ))}
          </ul>

          <div className="dark:bg-dark-500 mx-4 my-4 h-px bg-gray-200" />

          <ul className="space-y-1.5 px-2 font-medium">
            <li>
              <Button
                component={Link}
                to="/docs/getting-started"
                variant="flat"
                className="group text-xs-plus w-full justify-start gap-2 p-2"
              >
                <DocumentMagnifyingGlassIcon className="dark:text-dark-300 dark:group-hover:text-dark-200 dark:group-focus:text-dark-200 size-4.5 text-gray-400 transition-colors group-hover:text-gray-500 group-focus:text-gray-500" />
                <span>Documentation</span>
              </Button>
            </li>
            <li>
              <Button
                variant="flat"
                className="group text-xs-plus w-full justify-start gap-2 p-2"
              >
                <QuestionMarkCircleIcon className="dark:text-dark-300 dark:group-hover:text-dark-200 dark:group-focus:text-dark-200 size-4.5 text-gray-400 transition-colors group-hover:text-gray-500 group-focus:text-gray-500" />
                <span>Tailux Faq</span>
              </Button>
            </li>
            <li>
              <Button
                component="a"
                href="mailto:help@piniastudio.com"
                variant="flat"
                className="group text-xs-plus w-full justify-start gap-2 p-2"
              >
                <ChatBubbleBottomCenterIcon className="dark:text-dark-300 dark:group-hover:text-dark-200 dark:group-focus:text-dark-200 size-4.5 text-gray-400 transition-colors group-hover:text-gray-500 group-focus:text-gray-500" />
                <span>Ask a Question</span>
              </Button>
            </li>
          </ul>
        </ScrollShadow>
        <Footer />
      </div>
    </div>
  );
}

function MenuItem({
  title,
  transKey,
  icon,
  path,
  ...rest
}: {
  title: string;
  transKey: string;
  icon: string;
  path: string;
}) {
  const { lgAndDown } = useBreakpointsContext();
  const { close } = useSidebarContext();
  const { t } = useTranslation();

  if (!icon || !navigationIcons[icon]) {
    throw new Error(`Icon ${icon} not found in navigationIcons`);
  }

  const Icon = navigationIcons[icon];

  // compute active state via tanstack/react-router v1 helper
  const matchRoute = useMatchRoute();
  const isActive = !!matchRoute({ to: path, fuzzy: false });

  // NOTE: react-router's NavLink provided isPending; TanStack v1 does not provide that in the same render-prop.
  // If you want a global "navigation pending" indicator, we can add it separately.
  const isPending = false;

  return (
    <Button
      component={Link}
      to={path}
      variant="flat"
      color={isActive ? "primary" : "neutral"}
      className={clsx(
        "group text-xs-plus w-full justify-start gap-2 p-2",
        isPending && "opacity-80",
      )}
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: "[data-menu-list-item]",
        parentSelector: "[data-menu-list]",
        activateOnFocus: true,
        loop: true,
        orientation: "vertical",
      })}
      data-menu-list-item
      onClick={() => {
        if (lgAndDown) close();
      }}
      {...rest}
    >
      {Icon && (
        <Icon
          className={clsx(
            isActive ? "text-this dark:text-this-light" : "dark:text-dark-300 dark:group-hover:text-dark-200 dark:group-focus:text-dark-200 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500",
            "size-4.5 transition-colors",
          )}
        />
      )}
      <span>{t(transKey) || title}</span>
    </Button>
  );
}
