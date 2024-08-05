import cn from "@/utils/cn";
import { DpProps } from "./dp.types";

export function DP(props: DpProps): JSX.Element {
  const { className, name } = props;

  return (
    <div
      className={cn([
        "bg-green-500 rounded-full flex justify-center items-center text-xl font-extrabold p-2",
        className,
      ])}
    >
      {name[0].toUpperCase()}
    </div>
  );
}
