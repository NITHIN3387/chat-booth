import type { FormFieldsType } from "@/components/ui/form";

export const initValues = {
  name: "",
  email: "",
  password: "",
  confirm: "",
};

export const formFields: FormFieldsType[] = [
  {
    id: "name",
    label: "Name",
    placeholder: "Your Name",
    type: "text",
  },
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
  {
    id: "confirm",
    label: "Confirm Password",
    placeholder: "••••••••",
    type: "password",
  },
];
