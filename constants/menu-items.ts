import React from "react";
import {
  Home,
  TaskListSquareLtr,
  VehicleTruckProfile,
  Cube,
  Settings,
} from "@styled-icons/fluentui-system-filled";

export type MenuOption = {
  name: string;
  icon: React.ComponentType;
  url: string;
  subItems?: MenuOption[];
};

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Home",
    icon: Home,
    url: "/",
  },
  {
    name: "Tasks",
    icon: TaskListSquareLtr,
    url: "/tasks",
  },
  {
    name: "Shipping",
    icon: VehicleTruckProfile,
    url: "/shipping",
  },
  {
    name: "Products",
    icon: Cube,
    url: "/products",
  },
  {
    name: "Settings",
    icon: Settings,
    url: "/settings",
  },
];

export const MENU_ITEMS: MenuOption[] = MENU_OPTIONS;
