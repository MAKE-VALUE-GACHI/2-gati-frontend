import type { ReactNode } from "react";

export interface IContainer {
  children: ReactNode;
  keyword?: string;
  setKeyword?: (value: string) => void;
}

export interface IButtonProps {
  text: string;
  onClick: () => void; // 또는 function?: () => void
}
