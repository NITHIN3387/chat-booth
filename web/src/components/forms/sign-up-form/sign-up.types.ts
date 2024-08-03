import type { HTMLInputTypeAttribute } from "react";

export interface ValuesType {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

export interface FormFieldsType {
  id: "name" | "email" | "password" | "confirm";
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;

}