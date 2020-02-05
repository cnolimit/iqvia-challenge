import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  Avatar,
  Button,
  CircularProgress,
  TextField,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { DELETE_CONTACT, EDIT_CONTACT } from "../constants/mutations";
import { GET_CONTACT } from "../constants/queries";
import { getInitials } from "../utils";
import DeleteContactDialog from "./dialog/delete-contact";
import Container from "./shared/container";

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
  editingButtonsWrapper: {
    display: "flex",
    justifyContent: "flex-end"
  },
  editingButton: {
    flexGrow: 0
  }
});

const Contact = () => {
  const { id } = useParams();
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_CONTACT, {
    variables: { id }
  });
  if (error) return <p>Error :( {error.message}</p>;

  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);
  const [dialogToggle, setDialogToggle] = useState(false);

  const [deleteContact] = useMutation(DELETE_CONTACT);
  const [editContact] = useMutation(EDIT_CONTACT);

  const handleSave = () => {
    editContact({ variables: { id, name, email } });
    setEditing(false);
    window.location.reload();
  };

  const handleDelete = () => {
    deleteContact({ variables: { id } });
    setDialogToggle(false);
    window.location.replace("/");
  };

  const handleEditToggle = (toggle: boolean) => {
    setEditing(toggle);
    setName(data.contact.name);
    setEmail(data.contact.email);
  };

  return (
    <Container>
      {loading ? (
        <CircularProgress size={40} thickness={5} />
      ) : (
        <React.Fragment>
          <DeleteContactDialog
            open={dialogToggle}
            onDelete={handleDelete}
            onCancel={() => setDialogToggle(false)}
          />
          <div className={classes.wrapper}>
            <Avatar className={classes.avatar}>
              {getInitials(data.contact.name)}
            </Avatar>
            <Typography variant="h4">{data.contact.name}</Typography>
            <Typography variant="subheading">{data.contact.email}</Typography>
            <div className={classes.controls}>
              {!editing && (
                <React.Fragment>
                  <Button
                    className={classes.button}
                    onClick={() => handleEditToggle(true)}
                  >
                    EDIT
                  </Button>
                  <Button
                    onClick={() => setDialogToggle(true)}
                    className={classes.button}
                  >
                    DELETE
                  </Button>
                </React.Fragment>
              )}
            </div>

            <div className={classes.inputWrapper}>
              <TextField
                label="Name"
                margin="normal"
                value={editing ? name : data.contact.name}
                disabled={!editing}
                onChange={e => setName(e.target.value)}
              />
              <TextField
                label="Email"
                margin="normal"
                value={editing ? email : data.contact.email}
                disabled={!editing}
                onChange={e => setEmail(e.target.value)}
              />
              {editing && (
                <div className={classes.editingButtonsWrapper}>
                  <Button
                    className={`${classes.editingButton} ${classes.button}`}
                    onClick={() => handleEditToggle(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className={`${classes.editingButton} ${classes.button}`}
                    onClick={() => handleSave()}
                  >
                    SAVE
                  </Button>
                </div>
              )}
            </div>
          </div>
        </React.Fragment>
      )}
    </Container>
  );
};

export default Contact;
