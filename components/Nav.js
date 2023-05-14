import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-end w-full p-6 space-x-4 text-sm text-gray-900 font-inter">
      <Link href="/retrospectives" className="hover:underline">
        Retrospectives
      </Link>
      <Link href="/projects" className="hover:underline">
        Projects
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
    </nav>
  );
}
