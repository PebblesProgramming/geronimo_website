"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { navItems } from "./NavItems";
import { useState } from "react";
import logo from "../../../public/channels4_profile.jpg";
import Image from "next/image";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <nav
      className="
        fixed top-2 left-1/2 -translate-x-1/2 
        flex justify-between items-center
        bg-gray-800 rounded-lg 
        px-5 w-[60%]
        text-[1.2rem] 
        shadow-sm z-50
      "
    >
      <Link href={"/"}>
      <h3 className="flex items-center gap-2 text-white-600 cursor-pointer transition-all hover:pl-2 p-4">
        <Image className="rounded-lg" src={logo} alt="logo" width={80} height={80} priority />
        {/* <span className="font-semibold">Geronimo</span> */}
      </h3>
      </Link>

      <div
        className="text-white-600 cursor-pointer lg:hidden"
        onClick={handleClick}
      >
        {open ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
      </div>

    <ul
      className={`
        flex flex-col items-stretch bg-gray-700 rounded-b-lg shadow-lg absolute top-36 left-0 w-full
        transition-all duration-300 ease-in-out
        lg:static lg:flex lg:flex-row lg:items-center lg:justify-center lg:flex-1 lg:gap-4 
        lg:bg-transparent lg:w-auto lg:h-auto lg:translate-y-0 lg:opacity-100
        ${open ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}
      `}
    >

        {navItems.map((item, index) => (
          <li key={index}>
           <Link
              href={item.href}
              className={`${item.className} ${path === item.href ? "ring-2 ring-teal-400" : ""}`}
            >

            
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
