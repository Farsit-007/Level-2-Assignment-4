import { ReactNode } from "react";

export type TRoutes = {
  path: string;
  element: ReactNode;
};

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export type TSidebarItems = {
  key: string;
  label: { name?: string; to?: string };
  children?: TSidebarItems[];
};
