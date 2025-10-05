import { FaceSmileIcon, HomeIcon, InformationCircleIcon } from "@heroicons/react/16/solid";

type NavItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
  className: string;
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    icon: <HomeIcon className="w-5 h-5" />,
    href: "/",
    className:
      " px-3 py-2 flex items-center gap-2 rounded-md hover:bg-teal-400 hover:text-black transition-all duration-200 ease-in-out",
  },
  {
    label: "Team",
    icon: <InformationCircleIcon className="w-5 h-5" />,
    href: "/team",
    className:
      "px-3 py-2 flex items-center gap-2 rounded-md hover:bg-teal-400 hover:text-black transition-all duration-200 ease-in-out",
  },
  {
    label: "Updates",
    icon: <FaceSmileIcon className="w-5 h-5" />,
    href: "/updates",
    className:
      "px-3 py-2 flex items-center gap-2 rounded-md hover:bg-teal-400 hover:text-black transition-all duration-200 ease-in-out",
  },
  {
    label: "Roadmap",
    icon: <FaceSmileIcon className="w-5 h-5" />,
    href: "/roadmap",
    className:
      " px-3 py-2 flex items-center gap-2 rounded-md hover:bg-teal-400 hover:text-black transition-all duration-200 ease-in-out",
  },
   {
  label: "Contact",
  icon: <FaceSmileIcon className="w-5 h-5" />,
  href: "/contact",
  className: `
    bg-teal-500 text-white font-semibold 
    px-4 py-2 flex items-center gap-2 rounded-full shadow-md
    hover:bg-teal-400 hover:scale-105 hover:shadow-lg hover:text-black
    active:scale-95 
    transition-all duration-200 ease-in-out
  `,
},
 {
  label: "Play",
  icon: <FaceSmileIcon className="w-5 h-5" />,
  href: "/play",
  className: `
    border border-teal-500 text-teal-500 font-semibold 
    px-4 py-2 flex items-center gap-2 rounded-full shadow-sm
    hover:bg-teal-500 hover:text-white hover:scale-105 hover:shadow-md
    active:scale-95 
    transition-all duration-200 ease-in-out
  `,
}

];
