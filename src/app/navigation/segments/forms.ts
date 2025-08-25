import { baseNavigationObj } from "../baseNavigation";
import { NavigationTree } from "@/@types/navigation";

const ROOT_FORMS = "/forms";

const path = (root: string, item: string) => `${root}${item}`;

export const forms: NavigationTree = {
  ...baseNavigationObj["forms"],
  type: "root",
  childs: [
    {
      id: "forms.directory",
      type: "item",
      path: path(ROOT_FORMS, "/list"),
      title: "Directory",
      transKey: "nav.forms.directory",
      icon: "forms.directory",
    },
    {
      id: "forms.purchase-history",
      type: "item",
      path: path(ROOT_FORMS, "/history"),
      title: "Purchase History",
      transKey: "nav.forms.purchase-history",
      icon: "forms.purchase-history",
    },
    {
      id: "forms.loyalty-program",
      type: "item",
      path: path(ROOT_FORMS, "/loyalty"),
      title: "New Post Form",
      transKey: "nav.forms.loyalty-program",
      icon: "forms.loyalty-program",
    },
    {
      id: "pages.divide-2",
      type: "divider",
    },
    {
      id: "forms.segmentation",
      type: "item",
      path: path(ROOT_FORMS, "/segments"),
      title: "Segmentation",
      transKey: "nav.forms.segmentation",
      icon: "forms.segmentation",
    },
    {
      id: "forms.credit-accounts",
      type: "item",
      path: path(ROOT_FORMS, "/credit"),
      title: "Credit Accounts",
      transKey: "nav.forms.credit-accounts",
      icon: "forms.credit-accounts",
    },
    {
      id: "forms.gift-cards",
      type: "item",
      path: path(ROOT_FORMS, "/giftcards"),
      title: "Gift Cards",
      transKey: "nav.forms.gift-cards",
      icon: "forms.gift-cards",
    },
    {
      id: "forms.feedback-reviews",
      type: "item",
      path: path(ROOT_FORMS, "/feedback"),
      title: "Feedback & Reviews",
      transKey: "nav.forms.feedback-reviews",
      icon: "forms.feedback-reviews",
    },
    {
      id: "forms.referral-program",
      type: "item",
      path: path(ROOT_FORMS, "/referrals"),
      title: "Referral Program",
      transKey: "nav.forms.referral-program",
      icon: "forms.referral-program",
    },
    {
      id: "forms.customer-insights",
      type: "item",
      path: path(ROOT_FORMS, "/insights"),
      title: "Customer Insights",
      transKey: "nav.forms.customer-insights",
      icon: "forms.customer-insights",
    },
    {
      id: "forms.ai-churn-risk",
      type: "item",
      path: path(ROOT_FORMS, "/churn"),
      title: "Swap",
      transKey: "nav.forms.ai-churn-risk",
      icon: "forms.ai-churn-risk",
    },
  ],
};
