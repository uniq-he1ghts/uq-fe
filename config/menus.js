import { Users2 } from "lucide-react";
import {
  DashBoard,
  Analytics,
  Ads,
  Inventory,
  TraficConversion,
  Goal,
  Support,
  activity,
  Collaboration,
  history,
} from "@/components/svg";

export const menusConfig = {
  mainNav: [
    {
      title: "Dashboard",
      icon: DashBoard,
      href: "/dashboard",
    },
    {
      title: "Users Management",
      icon: Users2,
      href: "/users",
    },
    {
      title: "Advertising",
      icon: Ads,
      child: [
        {
          title: "Ad Dashboard",
          icon: DashBoard,
          href: "/adDashboard",
        },
        {
          title: "Activity",
          icon: activity,
          href: "/activity",
        },
        {
          title: "Collaboration",
          icon: Collaboration,
          href: "/collaboration",
        },
        {
          title: "Historical Analysis",
          icon: history,
          href: "/historical",
        },
        {
          title: "Custom Alert",
          icon: history,
          href: "/customAlert",
        },
      ],
    },
    {
      title: "Analytics",
      icon: Analytics,
      href: "/analytics",
    },
    {
      title: "Inventory",
      icon: Inventory,
      href: "/inventory",
    },
    {
      title: "Trafic Conversion",
      icon: TraficConversion,
      href: "/traficConversion",
    },
    {
      title: "Goals",
      icon: Goal,
      href: "/goals",
    },
    {
      title: "Support",
      icon: Support,
      href: "/support",
    },
  ],
  sidebarNav: {
    modern: [
      {
        title: "Dashboard",
        icon: DashBoard,
        href: "/dashboard",
      },
      {
        title: "Users Management",
        icon: Users2,
        href: "/users",
      },
      {
        title: "Advertising",
        icon: Ads,
        child: [
          {
            title: "Ad Dashboard",
            icon: DashBoard,
            href: "/adDashboard",
          },
          {
            title: "Activity",
            icon: activity,
            href: "/activity",
          },
          {
            title: "Collaboration",
            icon: Collaboration,
            href: "/collaboration",
          },
          {
            title: "Historical Analysis",
            icon: history,
            href: "/historical",
          },
          {
            title: "Custom Alert",
            icon: history,
            href: "/customAlert",
          },
        ],
      },
      {
        title: "Analytics",
        icon: Analytics,
        href: "/analytics",
      },
      {
        title: "Inventory",
        icon: Inventory,
        href: "/inventory",
      },
      {
        title: "Trafic Conversion",
        icon: TraficConversion,
        href: "/traficConversion",
      },
      {
        title: "Goals",
        icon: Goal,
        href: "/goals",
      },
      {
        title: "Support",
        icon: Support,
        href: "/support",
      },
    ],
    classic: [
      {
        isHeader: true,
        title: "menu",
      },
      {
        title: "Dashboard",
        icon: DashBoard,
        href: "/",
      },
      {
        title: "Users Management",
        icon: Users2,
        href: "/users",
      },
      {
        title: "Advertising",
        icon: Ads,
        child: [
          {
            title: "Ad Dashboard",
            icon: DashBoard,
            href: "/adDashboard",
          },
          {
            title: "Activity",
            icon: activity,
            href: "/activity",
          },
          {
            title: "Collaboration",
            icon: Collaboration,
            href: "/collaboration",
          },
          {
            title: "Historical Analysis",
            icon: history,
            href: "/historical",
          },
          {
            title: "Custom Alert",
            icon: history,
            href: "/customAlert",
          },
        ],
      },
      {
        title: "Analytics",
        icon: Analytics,
        href: "/analytics",
      },
      {
        title: "Inventory",
        icon: Inventory,
        href: "/inventory",
      },
      {
        title: "Trafic Conversion",
        icon: TraficConversion,
        href: "/traficConversion",
      },
      {
        title: "Goals",
        icon: Goal,
        href: "/goals",
      },
      {
        title: "Support",
        icon: Support,
        href: "/support",
      },
    ],
  },
};
