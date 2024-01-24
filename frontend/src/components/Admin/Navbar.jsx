"use client";
import { usePathname } from "next/navigation";
import { Search, MessageSquareText, Bell, Globe2 } from "lucide-react";
import Link from "next/link";

const NavbarAdmin = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between p-6 rounded-lg bg-slate-100">
      <div className="capitalize ">{pathname.split("/").pop()}</div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 px-2 bg-white rounded-md ">
          <Search size={15} />
          <input
            type="search"
            placeholder="Search..."
            className="p-2 text-sm focus:outline-none placeholder:text-sm"
          />
        </div>

        <div className="flex gap-5">
          <Link href={"/"}>
            <MessageSquareText size={20} className="hover:text-Orange " />
          </Link>
          <Link href={"/"}>
            <Bell size={20} className="hover:text-Orange " />
          </Link>
          <Link href={"/"}>
            <Globe2 size={20} className="hover:text-Orange " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
