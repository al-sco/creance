import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function CardLink({ children }: Props) {
  return (
    <a
      href="#"
      className="card p-2 font-bold border-4 border-black-800 border-top-none border-left-none"
    >
      {children}
    </a>
  );
}
