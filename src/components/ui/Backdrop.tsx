interface BackdropProps {
  closeDrawer: () => void;
}

export default function Backdrop({ closeDrawer }: BackdropProps) {
  return (
    <div
      onClick={closeDrawer}
      className="fixed top-0 left-0 w-full h-screen z-20 bg-neutral-950 opacity-75"
    />
  );
}
