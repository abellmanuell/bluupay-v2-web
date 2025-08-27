import { baseNavigationObj } from "../baseNavigation";
import { NavigationTree } from "@/@types/navigation";

const ROOT_DASHBOARDS = "/dashboards";

const path = (root: string, item: string) => `${root}${item}`;

export const dashboards: NavigationTree = {
  ...baseNavigationObj["dashboards"],
  type: "root",
  childs: [
    {
      id: "dashboards.sales",
      path: path(ROOT_DASHBOARDS, "/sales"),
      type: "item",
      title: "Sales Overview",
      transKey: "nav.dashboards.sales",
      icon: "dashboards.sales",
    },
    {
      id: "dashboards.revenue",
      path: path(ROOT_DASHBOARDS, "/revenue"),
      type: "item",
      title: "Revenue & Profits",
      transKey: "nav.dashboards.revenue",
      icon: "dashboards.revenue",
    },
    {
      id: "dashboards.channel",
      path: path(ROOT_DASHBOARDS, "/channel"),
      type: "item",
      title: "Sales by Channel",
      transKey: "nav.dashboards.channel",
      icon: "dashboards.channel",
    },
    {
      id: "dashboards.divide-1",
      type: "divider",
    },
    {
      id: "dashboards.branches",
      path: path(ROOT_DASHBOARDS, "/branches"),
      type: "item",
      title: "Branch Performance",
      transKey: "nav.dashboards.branches",
      icon: "dashboards.branches",
    },
    {
      id: "dashboards.top-products",
      path: path(ROOT_DASHBOARDS, "/top-products"),
      type: "item",
      title: "Top Products",
      transKey: "nav.dashboards.top-products",
      icon: "dashboards.top-products",
    },
    {
      id: "dashboards.customer-activity",
      path: path(ROOT_DASHBOARDS, "/customer-activity"),
      type: "item",
      title: "Customer Activity",
      transKey: "nav.dashboards.customer-activity",
      icon: "dashboards.customer-activity",
    },
    {
      id: "dashboards.outstanding-payments",
      path: path(ROOT_DASHBOARDS, "/outstanding-payments"),
      type: "item",
      title: "Outstanding Payments",
      transKey: "nav.dashboards.outstanding-payments",
      icon: "dashboards.outstanding-payments",
    },
    {
      id: "dashboards.low-stock-alerts",
      path: path(ROOT_DASHBOARDS, "/low-stock-alerts"),
      type: "item",
      title: "LOw Stock Alerts",
      transKey: "nav.dashboards.low-stock-alerts",
      icon: "dashboards.low-stock-alerts",
    },
    {
      id: "dashboards.staff-activity",
      path: path(ROOT_DASHBOARDS, "/staff-activity"),
      type: "item",
      title: "Staff Activity",
      transKey: "nav.dashboards.staff-activity",
      icon: "dashboards.staff-activity",
    },
    {
      id: "dashboards.ai-sales-forecast",
      path: path(ROOT_DASHBOARDS, "/ai-sales-forecast"),
      type: "item",
      title: "Ai Sales Forecast",
      transKey: "nav.dashboards.ai-sales-forecast",
      icon: "dashboards.ai-sales-forecast",
    },

  ],
};
