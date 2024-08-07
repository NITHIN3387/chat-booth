import cn from "@/utils/cn";
import { clsx } from "clsx";
import { InputProps } from "./input.types";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref): JSX.Element => {
    const { className, ...restProps } = props;

    const defaultClassName = clsx(
      "bg-secondary-bg-color",
      "py-2 px-3",
      "border-2 border-transparent rounded-sm",
      "placeholder:text-white/30",
      "focus:outline-none focus:border-primary-theme-color"
    );

    return (
      <input
        className={cn([defaultClassName, className])}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Input.displayName = "Input"