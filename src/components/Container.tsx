import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="p-[36px] md:p-[96px]">{children}</div>;
}
