import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed flex items-center h-12 p-1 space-x-1 transform -translate-x-1/2 bg-white border rounded-full shadow-sm filter left-1/2 top-4 w-max border-neutral-200">
      <Link
        href="#"
        className="px-4 rounded-full bg-neutral-100 h-full flex items-center font-satoshi font-medium text-[15px] text-neutral-900"
      >
        Home
      </Link>
      <Link
        href="/notes"
        className="px-4 rounded-full h-full flex items-center font-satoshi font-normal text-[15px] text-neutral-900"
      >
        Notes
      </Link>
    </nav>
  );
}
