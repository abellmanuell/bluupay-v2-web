import { NavigationTree } from "@/@types/navigation";

const ROOT_PROTOTYPES = "/prototypes";

const path = (root: string, item: string) => `${root}${item}`;

export const prototypes: NavigationTree = {
  id: "prototypes",
  type: "root",
  path: "prototypes",
  title: "Prototypes",
  transKey: "nav.prototypes.prototypes",
  icon: "prototypes",
  childs: [
   {
      id: "prototypes.catalog",
      path: path(ROOT_PROTOTYPES, "/catalog"),
      type: "item",
      title: "Catalog",
      transKey: "nav.prototypes.catalog",
      icon: "prototypes.catalog",
    },
    {
      id: "prototypes.categories",
      path: path(ROOT_PROTOTYPES, "/categories"),
      type: "item",
      title: "Categories",
      transKey: "nav.prototypes.categories",
      icon: "prototypes.categories",
    },
    {
      id: "prototypes.barcode",
      path: path(ROOT_PROTOTYPES, "/barcode"),
      type: "item",
      title: "Barcode & SKU",
      transKey: "nav.prototypes.barcode",
      icon: "prototypes.barcode",
    },
    {
      id: "prototypes.adjustments",
      path: path(ROOT_PROTOTYPES, "/adjustments"),
      type: "item",
      title: "Adjustments",
      transKey: "nav.prototypes.adjustments",
      icon: "prototypes.adjustments",
    },  
     {
      id: "prototypes.price",
      path: path(ROOT_PROTOTYPES, "/price-lists"),
      type: "item",
      title: "Price Lists",
      transKey: "nav.prototypes.price",
      icon: "prototypes.price",
    },  
    {
      id: "prototypes.discount-rule",
      path: path(ROOT_PROTOTYPES, "/discount-rule"),
      type: "item",
      title: "Discount Rule",
      transKey: "nav.prototypes.discount-rule",
      icon: "prototypes.discount-rule",
    },  

    {
      id: "prototypes.suppliers-linked",
      path: path(ROOT_PROTOTYPES, "/suppliers-linked"),
      type: "item",
      title: "Suppliers Linked",
      transKey: "nav.prototypes.suppliers-linked",
      icon: "prototypes.suppliers-linked",
    },  {
      id: "prototypes.stock-transfers",
      path: path(ROOT_PROTOTYPES, "/stock-transfers"),
      type: "item",
      title: "Stock Transfers",
      transKey: "nav.prototypes.stock-transfers",
      icon: "prototypes.stock-transfers",
    },  
    {
      id: "prototypes.expiry-batches",
      path: path(ROOT_PROTOTYPES, "/expiry-batches"),
      type: "item",
      title: "Expiry & Batches",
      transKey: "nav.prototypes.expiry-batches",
      icon: "prototypes.expiry-batches",
    },  
    {
      id: "prototypes.ai-demand-forcast",
      path: path(ROOT_PROTOTYPES, "/ai-demand-forcast"),
      type: "item",
      title: "AI Demand Forecast",
      transKey: "nav.prototypes.ai-demand-forcast",
      icon: "prototypes.ai-demand-forcast",
    },  
  ],
};
