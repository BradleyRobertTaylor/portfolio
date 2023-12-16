import { motion } from "framer-motion";
import { Backdrop } from "./Backdrop";
import {
  path01Variants,
  path02Variants,
  useMenuContext,
} from "@/providers/MenuAnimationProvider";

interface HamburgerButtonProps {
  onCloseDrawer: () => void;
  onOpenDrawer: () => void;
  isOpen: boolean;
}

export function HamburgerButton({
  isOpen,
  onCloseDrawer,
  onOpenDrawer,
}: HamburgerButtonProps) {
  const { path01Controls, path02Controls } = useMenuContext();

  return (
    <>
      <button
        onClick={isOpen ? onCloseDrawer : onOpenDrawer}
        className="relative z-50"
      >
        <svg
          className="block w-8 stroke-neutral-950 dark:stroke-neutral-50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            {...path01Variants.closed}
            animate={path01Controls}
            transition={{ duration: 0.2 }}
          />
          <motion.path
            {...path02Variants.closed}
            animate={path02Controls}
            transition={{ duration: 0.2 }}
          />
        </svg>
      </button>
      {isOpen && <Backdrop closeDrawer={onCloseDrawer} />}
    </>
  );
}
