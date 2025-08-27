import { NavigationTree } from "@/@types/navigation";

export const baseNavigationObj: Record<string, NavigationTree> = {
  dashboards: {
    id: "dashboards",
    type: "item",
    path: "/dashboards",
    title: "Dashboards",
    transKey: "nav.dashboards.dashboards",
    icon: "dashboards",
  },
  apps: {
    id: "apps",
    type: "item",
    path: "/apps",
    title: "Sales",
    transKey: "nav.apps.apps",
    icon: "apps",
  },
  prototypes: {
    id: "prototypes",
    type: "item",
    path: "/prototypes",
    title: "Products",
    transKey: "nav.prototypes.prototypes",
    icon: "prototypes",
  },
  tables: {
    id: "tables",
    type: "item",
    path: "/tables",
    title: "Orders",
    transKey: "nav.tables.tables",
    icon: "tables",
  },
  forms: {
    id: "forms",
    type: "item",
    path: "/forms",
    title: "Customers",
    transKey: "nav.forms.forms",
    icon: "forms",
  },
  components: {
    id: "components",
    type: "item",
    path: "/components",
    title: "Finance",
    transKey: "nav.components.components",
    icon: "components",
  },
  docs: {
    id: "docs",
    type: "item",
    path: "/docs",
    title: "Reports",
    transKey: "nav.docs.docs",
    icon: "docs",
  },
};

export const baseNavigation: NavigationTree[] = Array.from(
  Object.values(baseNavigationObj),
);
