import { useEffect } from "react";

export const useLockScroll = () => {
  useEffect(() => {
    document.body.classList.add("lock-scroll");
    return () => {
      document.body.classList.remove("lock-scroll");
    };
  }, []);
};
