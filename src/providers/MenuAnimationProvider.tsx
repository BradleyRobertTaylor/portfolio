"use client";

import { AnimationControls, useAnimationControls } from "framer-motion";
import { ReactNode, createContext, useContext } from "react";

interface MenuAnimationProviderProps {
  children: ReactNode;
}

interface MenuControls {
  openBurger: () => Promise<void>;
  closeBurger: () => Promise<void>;
  path01Controls: AnimationControls;
  path02Controls: AnimationControls;
}

export const MenuContext = createContext<MenuControls | undefined>(undefined);

export const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

export const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" },
};

export const MenuAnimationProvider = ({
  children,
}: MenuAnimationProviderProps) => {
  const path01Controls = useAnimationControls();
  const path02Controls = useAnimationControls();

  const openBurger = async () => {
    await path02Controls.start(path02Variants.moving);
    path01Controls.start(path01Variants.open);
    path02Controls.start(path02Variants.open);
  };

  const closeBurger = async () => {
    path01Controls.start(path01Variants.closed);
    await path02Controls.start(path02Variants.moving);
    path02Controls.start(path02Variants.closed);
  };

  return (
    <MenuContext.Provider
      value={{
        closeBurger,
        openBurger,
        path01Controls,
        path02Controls,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const menuContext = useContext(MenuContext);

  if (!menuContext) {
    throw new Error(
      "No MenuContext.provider found when calling useMenuContext",
    );
  }

  return menuContext;
};
