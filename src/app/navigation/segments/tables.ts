import { baseNavigationObj } from "../baseNavigation";
import { NavigationTree } from "@/@types/navigation";

const ROOT_TABLES = "/tables";

const path = (root: string, item: string) => `${root}${item}`;

export const tables: NavigationTree = {
  ...baseNavigationObj["tables"],
  type: "root",
  childs: [
    {
      id: "tables.stores",
      path: path(ROOT_TABLES, "/stores"),
      type: "item",
      title: "In-Store Orders",
      transKey: "nav.tables.stores",
      icon: "table.item",
    },
    {
      id: "tables.online",
      path: path(ROOT_TABLES, "/online"),
      type: "item",
      title: "Online Orders",
      transKey: "nav.tables.online",
      icon: "table.item",
    },
    {
      id: "tables.social",
      path: path(ROOT_TABLES, "/social"),
      type: "item",
      title: "Social Orders",
      transKey: "nav.tables.social",
      icon: "table.item",
    },
    {
      id: "tables.marketplace",
      path: path(ROOT_TABLES, "/marketplace"),
      type: "item",
      title: "Marketplace Orders",
      transKey: "nav.tables.marketplace",
      icon: "table.item",
    },
    {
      id: "tables.preorders",
      path: path(ROOT_TABLES, "/preorders"),
      type: "item",
      title: "Pre-Orders",
      transKey: "nav.tables.preorders",
      icon: "table.item",
    },
    {
      id: "tables.divide-1",
      type: "divider",
    },
    {
      id: "tables.deliveries",
      path: path(ROOT_TABLES, "/deliveries"),
      type: "item",
      title: "Deliveries",
      transKey: "nav.tables.deliveries",
      icon: "table.item",
    },
    {
      id: "tables.quotes",
      path: path(ROOT_TABLES, "/quotes"),
      type: "item",
      title: "Quotes to Orders",
      transKey: "nav.tables.quotes",
      icon: "table.item",
    },
    {
      id: "tables.order-fulfillment",
      path: path(ROOT_TABLES, "/order-fulfillment"),
      type: "item",
      title: "Order Fulfillment",
      transKey: "nav.tables.order-fulfillment",
      icon: "table.item",
    },
    {
      id: "tables.ai-delivery-eta",
      path: path(ROOT_TABLES, "/ai-delivery-eta"),
      type: "item",
      title: "AI Delivery ETA",
      transKey: "nav.tables.ai-delivery-eta",
      icon: "table.item",
    },
  ],
};
