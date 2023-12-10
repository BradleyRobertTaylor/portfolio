import Logo from "./ui/Logo";

export default function MobileNav() {
  return (
    <div className="md:hidden flex justify-between items-center">
      <Logo />
    </div>
  );
}
