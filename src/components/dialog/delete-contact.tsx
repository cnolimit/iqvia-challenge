import React from "react";
import DialogBox from "./dialog-box";

interface IDeleteContactDialog {
  onDelete: () => void;
  onCancel: () => void;
  open: boolean;
}
const DeleteContactDialog = ({
  onCancel,
  onDelete,
  open
}: IDeleteContactDialog) => {
  return (
    <DialogBox
      title="Are you sure you want to delete?"
      open={open}
      onCancel={onCancel}
      onSubmit={onDelete}
    ></DialogBox>
  );
};

export default DeleteContactDialog;
