import Link from "next/link";

export default function Logo() {
  return (
    <Link
      className="uppercase text-lg tracking-widest focus-visible:outline-blue-400 focus-visible:rounded-xl"
      href="/"
    >
      <span>Bradley Taylor</span>
    </Link>
  );
}
