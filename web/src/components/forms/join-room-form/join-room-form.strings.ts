import { FormFieldsType } from "@/components/ui/form";

export const initValues = {
  roomId: "",
};

export const formFields: FormFieldsType[] = [
  {
    id: "roomId",
    label: "Room Id",
    placeholder: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    type: "text",
  },
];
