"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuList = [
  {
    name: "Home",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "History",
    path: "/dashboard/history",
    icon: FileClock,
  },
  {
    name: "Billing",
    path: "/dashboard/billing",
    icon: WalletCards,
  },
  {
    name: "Setting",
    path: "/dashboard/setting",
    icon: Settings,
  },
];

function Sidebar() {
  const path = usePathname();
  return (
    <div className="h-screen p-5 shadow-md border">
      <div className="flex justify-center">
        <Image src="/logo.svg" alt="logo" width={80} height={49} />
      </div>
      <hr className="my-4 border shadow-sm" />
      <div className="mt-5">
        {MenuList.map((item, index) => {
          return (
            <Link key={index} href={item.path}>
              <div
                className={`flex justify-between items-center hover:bg-primary gap-2 mb-2 p-3 hover:text-white rounded-lg cursor-pointer transition duration-300 ease-in-out ${
                  path === item.path && "bg-primary text-white"
                }`}
              >
                <div className="flex items-center">
                  <item.icon className="mr-2 h-6 w-6" />
                  <p className="text-lf">{item.name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
