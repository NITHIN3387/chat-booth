import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface DialogBoxProps {
  children: ReactNode;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
}
