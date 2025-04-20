import { Heart, Search, ShoppingBag } from "lucide-react";
import { JSX } from "react";

export type MenuItemProps = {
  name?: string;
  icon?: JSX.Element;
  link: string;
};

export const MenuItem: MenuItemProps[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    icon: <Search size={18} />,
    link: "/search",
  },

  {
    icon: <ShoppingBag size={18} />,
    link: "/cart",
  },
  {
    icon: <Heart size={18} />,
    link: "/cart",
  },
];
