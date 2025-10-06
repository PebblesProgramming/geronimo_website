import { FaTwitter, FaDiscord, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const socialLinks = [
  { name: 'Twitter', href: 'https://x.com/darkmatstudios', icon: FaTwitter },
  { name: 'Discord', href: 'https://discord.gg/QytFntpM', icon: FaDiscord },
  //   { name: 'Instagram', href: '#', icon: FaInstagram },
  { name: 'Youtube', href: 'https://www.youtube.com/@darkmatterstudios4667', icon: FaYoutube },
  { name: 'TikTok', href: 'https://www.tiktok.com/@darkmatterstudios_01?lang=en', icon: FaTiktok },
];

const Footer = () => {
  const TERMINAL_GREEN = '#00ff00';

  return (
    <footer
      className={`mx-auto mt-20 flex w-full max-w-7xl flex-col items-center justify-between border-t-4 p-6 sm:flex-row border-t-[${TERMINAL_GREEN}]/20 pt-8 shadow-[0_0_20px_rgba(0,255,0,0.1)]`}
    >
      {/* Linker Kant: Studio Naam & Copyright */}
      <div className="mb-4 text-center sm:mb-0 sm:text-left">
        <p className={`text-xl font-bold text-[${TERMINAL_GREEN}] tracking-widest uppercase`}>
          :: DARKMATTERSTUDIOS
        </p>
        <p className="mt-1 font-mono text-xs text-gray-600">
          &gt; {new Date().getFullYear()} [ALL RIGHTS RESERVED]
        </p>
      </div>

      {/* Rechter Kant: Social Media Iconen */}
      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            aria-label={`Link to ${link.name}`}
            className={`text-gray-400 hover:text-[${TERMINAL_GREEN}] relative transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full hover:scale-110 active:scale-95 before:bg-[${TERMINAL_GREEN}]/50 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100`}
          >
            {/* Social Media Icon - HET GEFIXTE DEEL */}
            <link.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
