import { cva } from "class-variance-authority";
import { clsx } from "clsx"
import type { ButtonProps } from "./button.types";

export const buttonConfig = cva("py-2 px-4 rounded-md", {
  variants: {
    variant: {
      solid: clsx(
        "bg-primary-theme-color", 
        "text-white",
        "hover:bg-primary-theme-color/80"
      ),
      outlined: clsx(
        "border border-2 border-primary-theme-color",
        "text-primary-theme-color",
        "hover:bg-primary-theme-color/20"
      ),
      ghost: clsx(
        "text-primary-theme-color",
        "hover:bg-primary-theme-color/20"
      ),
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

export function Button(props: ButtonProps): JSX.Element {
  const { children, className, variant, ...restProps } = props;

  return (
    <button className={buttonConfig({ className, variant })} {...restProps}>
      {children}
    </button>
  );
}
