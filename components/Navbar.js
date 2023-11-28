import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Writing",
    href: "/writing",
  },
];

const Navbar = () => {
  return (
    <div className="fixed flex items-center justify-between w-full p-4 bg-neutral-50/80 filter backdrop-blur">
      <nav className="flex space-x-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium rounded-full font-satoshi text-neutral-900 hover:text-neutral-600"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center">
        <span className="text-sm font-normal tracking-wide font-satoshi text-neutral-400">
          viktoratanasov.com
        </span>
      </div>
    </div>
  );
};

export default Navbar;
