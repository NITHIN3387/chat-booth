import type { FormFieldsType } from "@/components/forms/form";

export const initValues = {
  roomName: "",
};

export const formFields: FormFieldsType[] = [
  {
    id: "roomName",
    label: "Room Name",
    placeholder: "My Room",
    type: "text",
  },
];
