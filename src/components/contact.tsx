import { Avatar, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { IContact } from "../types";
import Container from "./container";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    marginBottom: "15px"
  },
  controls: {
    display: "flex",
    margin: "15px 0",
    height: "80px"
  },
  button: {
    flexGrow: 1,
    width: "100px",
    height: "40px",
    color: "white",
    backgroundColor: "blue",
    margin: "15px 5px 0"
  },
  inputWrapper: {
    width: "100%",
    marginTop: "50px",
    display: "flex",
    flexDirection: "column"
  },
  saveButton: {
    alignSelf: "flex-end"
  }
});

const Contact = (props: IContact) => {
  const classes = useStyles();
  const [name, setName] = useState(props.name || "");
  const [email, setEmail] = useState(props.email || "");
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <Container>
      <div className={classes.wrapper}>
        <Avatar className={classes.avatar}>PG</Avatar>
        <Typography variant="h4">{props.name}</Typography>
        <Typography variant="subheading">{props.email}</Typography>
        <div className={classes.controls}>
          {!editing && (
            <React.Fragment>
              <Button
                className={classes.button}
                onClick={() => setEditing(true)}
              >
                EDIT
              </Button>
              <Button className={classes.button}>DELETE</Button>
            </React.Fragment>
          )}
        </div>

        <div className={classes.inputWrapper}>
          <TextField
            error={!name.length}
            label="Email"
            margin="normal"
            value={name}
            disabled={!editing}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            error={!email.length}
            label="Email"
            margin="normal"
            value={email}
            disabled={!editing}
            onChange={e => setEmail(e.target.value)}
          />
          {editing && (
            <Button
              className={`${classes.saveButton} ${classes.button}`}
              onClick={() => handleSave()}
            >
              SAVE
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Contact;
