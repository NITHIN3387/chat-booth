import { DialogBoxProps } from "./dialog-box.types";

export function DialogBox({
  children,
  setShowDialog,
}: DialogBoxProps): JSX.Element {
  return (
    <div
      className="fixed top-0 left-0 backdrop-blur-sm h-dvh w-screen flex justify-center items-center z-10 !m-0"
      id="dialogBox"
      onClick={(e) =>
        (e.target as any).id === "dialogBox" ? setShowDialog(false) : null
      }
    >
      <article className="bg-primary-bg-color p-6 rounded-md border border-ternary-bg-color shadow-md space-y-6 md:w-fit w-80">
        {children}
      </article>
    </div>
  );
}
