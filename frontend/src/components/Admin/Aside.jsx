"use client";
import {
  LayoutDashboard,
  Users,
  Package,
  CircleDollarSign,
  ShoppingBag,
  BarChart3,
  UsersRound,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import avatar from "/public/aboutPage/avatar1.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/admin",
        icon: <LayoutDashboard />,
      },
      {
        title: "Users",
        path: "/admin/users",
        icon: <Users />,
      },
      {
        title: "Products",
        path: "/admin/products",
        icon: <Package />,
      },
      {
        title: "Transactions",
        path: "/admin/transactions",
        icon: <CircleDollarSign />,
      },
    ],
  },
  {
    title: "Analitycs",
    list: [
      {
        title: "Revenue",
        path: "/admin/revenue",
        icon: <ShoppingBag />,
      },
      {
        title: "Reports",
        path: "/admin/reports",
        icon: <BarChart3 />,
      },
      {
        title: "Teams",
        path: "/admin/teams",
        icon: <UsersRound />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/admin/settings",
        icon: <Settings />,
      },
      {
        title: "Help",
        path: "/admin/help",
        icon: <HelpCircle />,
      },
      {
        title: "Logout",
        path: "/",
        icon: <LogOut />,
      },
    ],
  },
];

const AsidePage = () => {
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          src={avatar}
          alt=""
          width={50}
          height={50}
          className="object-cover rounded-full"
        />
        <div className="flex flex-col">
          <span className="">John Dao</span>
          <span className="text-xs text-Basalt_grey">Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat, idx) => (
          <li key={idx}>
            <span className="text-sm font-semibold text-Basalt_grey ">
              {cat.title}
            </span>
            {cat.list.map((item, idx) => (
              <MenuLink key={idx} item={item} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsidePage;

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`flex items-center hover:bg-Lynx_White gap-3 my-2 duration-100 ease-in-out transition-colors rounded-xl p-5 ${
        pathname === item.path && "bg-Lynx_White text-Orange"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};
