import type { ChangeEvent, Dispatch, SetStateAction } from "react";

type handleFormDataChangeParams = (
  event: ChangeEvent<HTMLInputElement>,
  state: any,
  setValue: Dispatch<SetStateAction<any>>
) => void;

export const handleFormDataChange: handleFormDataChangeParams = (
  event,
  state,
  setValue
) => {
  setValue((pre: any) => ({
    ...pre,
    [event.target.name]: event.target.value,
  }));

  if (state?.error.length) state.error = "";
};
