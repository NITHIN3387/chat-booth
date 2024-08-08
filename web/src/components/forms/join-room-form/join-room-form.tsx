import { CreateRoomFormProps } from "./join-room-form.types";
import { DialogBox } from "@/components/ui/dialog-box";
import { Form } from "../../ui/form";
import { formFields, initValues } from "./join-room-form.strings";
import { handleRoomJoin } from "@/utils/rooms";

export function JoinRoomForm({
  setShowDialog,
}: CreateRoomFormProps): JSX.Element {
  return (
    <DialogBox setShowDialog={setShowDialog}>
      <h1>JOIN ROOM</h1>
      <Form
        handler={handleRoomJoin}
        formFields={formFields}
        initValues={initValues}
        submitButtonLabel={"JOIN"}
      />
    </DialogBox>
  );
}
