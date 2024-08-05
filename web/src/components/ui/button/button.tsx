import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import type { ButtonProps } from "./button.types";

export const buttonConfig = cva("rounded-md", {
  variants: {
    variant: {
      solid: clsx(
        "bg-primary-theme-color",
        "text-white",
        "hover:bg-primary-theme-color/80"
      ),
      outlined: clsx(
        "border border-2 border-primary-theme-color/50",
        "text-primary-theme-color",
        "hover:bg-primary-theme-color/20"
      ),
      ghost: clsx(
        "text-primary-theme-color",
        "hover:bg-primary-theme-color/20"
      ),
    },
    size: {
      sm: "py-1 px-3",
      md: "py-2 px-4",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

export function Button(props: ButtonProps): JSX.Element {
  const { children, className, size, variant, ...restProps } = props;

  return (
    <button
      className={buttonConfig({ className, size, variant })}
      {...restProps}
    >
      {children}
    </button>
  );
}
