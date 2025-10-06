'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { navItems } from './NavItems';
import { useState } from 'react';
import Image from 'next/image';

import logo from '../../public/channels4_profile.jpg';

// Terminal Groen: #00ff00
const TERMINAL_GREEN = '#00ff00';

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    // Oplossing voor Tailwind: Vervang de dynamische klasse met de expliciete kleurwaarde.
    <nav
      className={`fixed top-4 left-1/2 z-50 flex w-[90%] -translate-x-1/2 items-center justify-between rounded-lg border border-[${TERMINAL_GREEN}]/20 bg-gray-900/90 px-5 py-2 text-gray-300 shadow-lg backdrop-blur-sm md:w-[80%] xl:w-[60%]`}
    >
      <Link href={'/'} className="flex items-center">
        <h3 className="flex cursor-pointer items-center gap-2 p-1 transition-all">
          <Image className="rounded-lg" src={logo} alt="logo" width={40} height={40} priority />
        </h3>
      </Link>

      {/* Mobiele Toggle */}
      <div className="cursor-pointer lg:hidden" onClick={handleClick}>
        {open ? (
          <XMarkIcon className={`h-7 w-7 text-[${TERMINAL_GREEN}]`} />
        ) : (
          <Bars3Icon className={`h-7 w-7 text-[${TERMINAL_GREEN}]`} />
        )}
      </div>

      {/* Navigatie Links */}
      <ul
        className={`// Mobiele menu achtergrond en padding absolute top-full left-0 flex w-full flex-col items-stretch rounded-b-lg bg-gray-900/95 p-4 shadow-2xl transition-all duration-300 ease-in-out lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:justify-end lg:gap-4 lg:bg-transparent lg:p-0 lg:opacity-100 ${open ? 'visible translate-y-0 opacity-100' : 'invisible opacity-0 lg:visible lg:opacity-100'} `}
      >
        {navItems.map((item, index) => (
          <li key={index} className="w-full lg:w-auto">
            <Link
              href={item.href}
              // Oplossing voor Tailwind: de ring-klasse direct met de hex-waarde
              className={` ${item.className} ${path === item.href ? `ring-2 ring-[${TERMINAL_GREEN}]` : ''} w-full text-center lg:w-auto`}
              onClick={() => setOpen(false)} // Sluit het mobiele menu bij het klikken op een link
            >
              <span className="flex items-center justify-center gap-2 lg:justify-start">
                {/* {item.icon} */}
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
