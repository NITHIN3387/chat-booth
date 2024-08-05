import type { HTMLInputTypeAttribute } from "react";

export interface FormFieldsType {
  id: string;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

type HandlerType = (
  state: any,
  formData: FormData
) => Promise<
  | {
      name: string;
      error: string;
      status: boolean;
    }
  | undefined
>;

export interface FormProps {
  handler: HandlerType;
  formFields: FormFieldsType[];
  initValues: any;
  submitButtonLabel: string;
}
