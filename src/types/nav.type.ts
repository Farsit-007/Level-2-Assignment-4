import { ReactNode } from "react";

export type TRoutes = {
  path: string;
  element: ReactNode;
};

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[] | undefined;
};

export type TSidebarItems = {
  key: string;
  label: { name?: string | undefined; to?: string };
  children?: TSidebarItems[];
};
