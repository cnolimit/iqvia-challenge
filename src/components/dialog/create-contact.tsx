import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { IContact } from "../../types";
import DialogBox from "./dialog-box";

const useStyles = makeStyles({
  container: {
    width: "100%",
    margin: "50px 0",
    display: "flex",
    flexDirection: "column"
  },
  input: {
    width: "300px"
  }
});

interface ICreateContactDialog {
  onCreate: (contact: IContact) => void;
  onCancel: () => void;
  open: boolean;
}
const CreateContactDialog = ({
  onCreate,
  onCancel,
  open
}: ICreateContactDialog) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const classes = useStyles();

  return (
    <DialogBox
      title="Create new contact"
      open={open}
      onCancel={onCancel}
      onSubmit={() => onCreate({ name, email })}
    >
      <div className={classes.container}>
        <TextField
          error={!name.length}
          label="Name"
          margin="normal"
          value={name}
          onChange={e => setName(e.target.value)}
          className={classes.input}
        />
        <TextField
          error={!email.length}
          label="Email"
          margin="normal"
          value={email}
          type="email"
          onChange={e => setEmail(e.target.value)}
          className={classes.input}
        />
      </div>
    </DialogBox>
  );
};

export default CreateContactDialog;
