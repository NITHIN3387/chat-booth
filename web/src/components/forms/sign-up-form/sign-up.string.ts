import type { FormFieldsType } from "./sign-up.types";

export const formFields: FormFieldsType[] = [
  {
    id: "name",
    label: "Name",
    placeholder: "Your Name",
    type: "text"
  },
  {
    id: "email",
    label: "Email",
    placeholder: "name@gmail.com",
    type: "email"
  },
  {
    id: "password",
    label: "Password",
    placeholder: "••••••••",
    type: "password"
  },
  {
    id: "confirm",
    label: "Confirm Password",
    placeholder: "••••••••",
    type: "password"
  },
]