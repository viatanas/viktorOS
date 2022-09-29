import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-end w-full p-6 space-x-4 text-sm text-gray-900 font-inter">
      <Link href="/retrospectives">
        <a className="hidden hover:underline">Retrospectives</a>
      </Link>
      <Link href="/projects">
        <a className="hover:underline">Projects</a>
      </Link>
      <Link href="/about">
        <a className="hover:underline">About</a>
      </Link>
    </nav>
  );
}
