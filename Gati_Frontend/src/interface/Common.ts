import type { ReactNode } from "react";

export interface IContainer {
  children: ReactNode;
}

export interface IButtonProps {
  text: string;
  onClick: () => void; // 또는 function?: () => void
}
