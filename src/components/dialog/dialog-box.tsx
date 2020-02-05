import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";

interface IDialogBox {
  title: string;
  open: boolean;
  onCancel: () => void;
  onSubmit: () => void;
  children?: any;
}

const DialogBox = ({
  title,
  onCancel,
  onSubmit,
  open,
  children
}: IDialogBox) => {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {children}
        <Button onClick={() => onCancel()} style={{ color: "red" }}>
          CANCEL
        </Button>
        <Button onClick={() => onSubmit()}>SUBMIT</Button>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
