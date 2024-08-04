import type { HTMLInputTypeAttribute } from "react";

export interface ValuesType {
  name?: string;
  email: string;
  password: string;
  confirm?: string;
}

export interface FormFieldsType {
  id: "name" | "email" | "password" | "confirm";
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

type AuthHandlerType = (
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

export interface AuthFormProps {
  authHandler: AuthHandlerType;
  formFields: FormFieldsType[];
  initValues: ValuesType;
  submitButtonLabel: string;
}
