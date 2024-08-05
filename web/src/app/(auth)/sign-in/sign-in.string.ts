import type { FormFieldsType } from "@/components/ui/form";

export const initValues = {
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
