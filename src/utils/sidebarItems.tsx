import { TSidebarItems, TUserPath } from "../types/nav.type";

export const sidebarRouteGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItems[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name!, 
        label: { to: `/${role}/${item.path}`, name: item.name! },
      });
    }
    if (item.children && item.name) {
      const filteredChildren = item.children.filter((child) => child.name);
      if (filteredChildren.length > 0) {
        acc.push({
          key: item.name!,
          label: { name: item.name! },
          children: filteredChildren.map((child) => ({
            key: child.name!, 
            label: { to: `/${role}/${child.path}`, name: child.name! },
          })),
        });
      }
    }
    return acc;
  }, [] as TSidebarItems[]);
  return sidebarItems;
};
