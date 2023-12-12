import Link from "next/link";

export function Logo() {
  return (
    <Link
      className="uppercase text-lg tracking-widest focus-visible:outline-blue-400 focus-visible:rounded-xl transition-colors"
      href="/"
    >
      <span>Bradley Taylor</span>
    </Link>
  );
}
