const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" },
};

interface HamburgerButtonProps {
  handleDrawer: () => void;
}

export function HamburgerButton({ handleDrawer }: HamburgerButtonProps) {
  return (
    <button onClick={handleDrawer} className="z-50">
      <svg
        className="block w-8 stroke-neutral-950 dark:stroke-neutral-50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          {...path01Variants.closed}
          // animate={path01Controls}
          // transition={{ duration: 0.2 }}
        />
        <path
          {...path02Variants.closed}
          // animate={path02Controls}
          // transition={{ duration: 0.2 }}
        />
      </svg>
    </button>
  );
}
