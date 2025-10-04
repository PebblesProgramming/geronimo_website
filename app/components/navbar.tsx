// app/components/Navbar.tsx

"use client"; // dit maakt het een client component

import Link from "next/link";
import { usePathname } from "next/navigation";  // om actieve link te detecteren
import { HomeIcon, InformationCircleIcon, FaceSmileIcon } from "@heroicons/react/16/solid";

type NavItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", icon: <HomeIcon/> , href: "/" },
  { label: "Over", icon: <InformationCircleIcon/> ,href: "/over" },
  { label: "Contact", icon: <FaceSmileIcon/>, href:"/contact" },
  // voeg meer routes toe naar jouw game
];

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="bg-gray-800 text-white px-4 py-2">
      <ul className="flex space-x-4">
        <div><HomeIcon/></div>
        {navItems.map((item) => {
          const isActive = path === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive ? "underline" : "hover:underline"}
              >
                {/* {item.icon} */}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
