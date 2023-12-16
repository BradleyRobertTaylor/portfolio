import { useEffect } from "react";

export const useLockScroll = () => {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    document.body.classList.add("lg:overflow-y-auto");
    return () => {
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.remove("lg:overflow-y-auto");
    };
  }, []);
};
