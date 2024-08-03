import { buttonConfig } from "./button";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonConfig> {
  children: ReactNode;
  variant?: "outlined" | "ghost"
}
