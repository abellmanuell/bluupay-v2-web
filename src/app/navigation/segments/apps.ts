import { NavigationTree } from "@/@types/navigation";
import { baseNavigationObj } from "../baseNavigation";

const ROOT_APPS = "/apps";

const path = (root: string, item: string) => `${root}${item}`;

export const apps: NavigationTree = {
  ...baseNavigationObj["apps"],
  type: "root",
  childs: [
    {
      id: "apps.post",
      path: path(ROOT_APPS, "/pos"),
      type: "item",
      title: "POST",
      transKey: "nav.apps.new-sale",
      icon: "apps.chat",
    },
    {
      id: "apps.split-payments",
      path: path(ROOT_APPS, "/split-payments"),
      type: "item",
      title: "AI Chat",
      transKey: "nav.apps.split-payments",
      icon: "apps.split-payments",
    },
    {
      id: "apps.discounts",
      path: path(ROOT_APPS, "/discounts"),
      type: "item",
      title: "Discounts",
      transKey: "nav.apps.discounts",
      icon: "apps.discounts",
    },
    {
      id: "apps.hold-resume",
      path: path(ROOT_APPS, "/hold-resume"),
      type: "item",
      title: "Hold/Resume",
      transKey: "nav.apps.hold-resume",
      icon: "apps.hold-resume",
    },
    {
      id: "apps.refunds-returns",
      path: path(ROOT_APPS, "/refunds-returns"),
      type: "item",
      title: "Refunds & Returns",
      transKey: "nav.apps.refunds-returns",
      icon: "apps.refunds-returns",
    },
    {
      id: "apps.divide-1",
      type: "divider",
    },
    {
      id: "apps.saved-carts",
      path: path(ROOT_APPS, "/saved-carts"),
      type: "item",
      title: "Saved Carts",
      transKey: "nav.apps.saved-carts",
      icon: "apps.saved-carts",
    },
    {
      id: "apps.offline-mode",
      path: path(ROOT_APPS, "/offline-mode"),
      type: "item",
      title: "Offline Mode",
      transKey: "nav.apps.offline-mode",
      icon: "apps.offline-mode",
    },
    {
      id: "apps.tips-charges",
      path: path(ROOT_APPS, "/tips-charges"),
      type: "item",
      title: "Tips & Charges",
      transKey: "nav.apps.tips-charges",
      icon: "apps.tips-charges",
    },
    {
      id: "apps.ai-upsell",
      path: path(ROOT_APPS, "/ai-upsell"),
      type: "item",
      title: "AI Upsell",
      transKey: "nav.apps.ai-upsell",
      icon: "apps.ai-upsell",
    },
  ],
};
