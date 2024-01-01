import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { MenuAnimationProvider } from "./MenuAnimationProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <MenuAnimationProvider>{children}</MenuAnimationProvider>
    </ThemeProvider>
  );
}
