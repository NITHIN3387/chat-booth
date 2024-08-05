import { CreateRoomFormProps } from "./create-room-form.types";
import { DialogBox } from "@/components/ui/dialog-box";
import { Form } from "../../ui/form";
import { formFields, initValues } from "./create-room-form.strings";
import { handleRoomCreation } from "@/utils/rooms";

export function CreateRoomForm({
  setShowDialog,
}: CreateRoomFormProps): JSX.Element {
  return (
    <DialogBox setShowDialog={setShowDialog}>
      <h1>CREATE ROOM</h1>
      <Form
        handler={handleRoomCreation}
        formFields={formFields}
        initValues={initValues}
        submitButtonLabel={"CREATE"}
      />
    </DialogBox>
  );
}
