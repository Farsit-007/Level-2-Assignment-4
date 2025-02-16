
import { TSidebarItems, TUserPath } from "../types/nav.type";

export const sidebarRouteGenerator = (items: TUserPath[], role : string) => {
  const sidebarItems = items.reduce((acc: TSidebarItems[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: { to: `/${role}/${item.path}`, name: item.name },
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: { name: item.name },
        children: item.children.map((child) => ({
          key: child.name,
          label: { to: `/${role}/${child.path}`, name: child.name },
        })),
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
