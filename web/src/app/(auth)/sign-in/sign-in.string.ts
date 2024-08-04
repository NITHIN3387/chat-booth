import type { FormFieldsType, ValuesType } from "@/components/forms/auth-form";

export const initValues: ValuesType = {
  email: "",
  password: "",
};

export const formFields: FormFieldsType[] = [
  {
    id: "email",
    label: "Email",
    placeholder: "name@gmail.com",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "••••••••",
    type: "password",
  },
];
