import {
  FaceSmileIcon,
  HomeIcon,
  InformationCircleIcon,
  CommandLineIcon,
  PlayIcon,
} from '@heroicons/react/16/solid';
// Zorg ervoor dat je de juiste iconen importeert. Ik heb hier FaceSmileIcon vervangen door meer relevante iconen.

type NavItem = {
  label: string;
  // icon: React.ReactNode;
  href: string;
  className: string;
};

// **Terminal Kleuren:**
// - Neon Groen: #00ff00
const TERMINAL_GREEN = '#00ff00';

export const navItems: NavItem[] = [
  {
    label: 'Home',
    // icon: <HomeIcon className="h-5 w-5" />,
    href: '/',
    className: ` px-3 py-2 flex items-center gap-2 rounded-md hover:bg-gray-700 hover:text-[${TERMINAL_GREEN}] transition-all duration-200 ease-in-out`,
  },
  {
    label: 'Team',
    // icon: <InformationCircleIcon className="h-5 w-5" />,
    href: '/team',
    className: `px-3 py-2 flex items-center gap-2 rounded-md hover:bg-gray-700 hover:text-[${TERMINAL_GREEN}] transition-all duration-200 ease-in-out`,
  },
  {
    label: 'Updates',
    // icon: <CommandLineIcon className="h-5 w-5" />, // Aangepast naar CommandLineIcon
    href: '/devupdates',
    className: `px-3 py-2 flex items-center gap-2 rounded-md hover:bg-gray-700 hover:text-[${TERMINAL_GREEN}] transition-all duration-200 ease-in-out`,
  },
  {
    label: 'Roadmap',
    // icon: <FaceSmileIcon className="h-5 w-5" />,
    href: '/roadmap',
    className: ` px-3 py-2 flex items-center gap-2 rounded-md hover:bg-gray-700 hover:text-[${TERMINAL_GREEN}] transition-all duration-200 ease-in-out`,
  },
  {
    label: 'Contact',
    // icon: <FaceSmileIcon className="h-5 w-5" />,
    href: '/contact',
    className: `
    border border-[${TERMINAL_GREEN}] text-[${TERMINAL_GREEN}] font-semibold // Rand en tekst in neon groen
    px-4 py-2 flex items-center gap-2 rounded-full shadow-
    hover:bg-[#00e000] hover:scale-105 hover:shadow-lg hover:text-black
    active:scale-95 
    transition-all duration-200 ease-in-out
  `,
  },
  {
    label: 'Play',
    // icon: <PlayIcon className="h-5 w-5" />, // Aangepast naar PlayIcon
    href: 'https://store.steampowered.com/app/2019620/GERONIMO/',
    className: `
    border border-[${TERMINAL_GREEN}] text-[${TERMINAL_GREEN}] font-semibold // Rand en tekst in neon groen
    px-4 py-2 flex items-center gap-2 rounded-full shadow-sm
    hover:bg-[#00e000] hover:scale-105 hover:shadow-lg hover:text-black
    active:scale-95 
    transition-all duration-200 ease-in-out
  `,
  },
];
