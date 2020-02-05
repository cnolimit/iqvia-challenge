import { useMutation, useQuery } from "@apollo/react-hooks";
import { Button, CircularProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CREATE_CONTACT } from "../constants/mutations";
import { GET_CONTACTS } from "../constants/queries";
import { IContact } from "../types";
import ContactCard from "./contact-card";
import CreateContactDialog from "./dialog/create-contact";
import Container from "./shared/container";

const useStyles = makeStyles({
  container: {
    maxWidth: "980px",
    width: "100%",
    height: "calc(100vh - 120px)",
    margin: "50px auto 0"
  },
  header: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    margin: "50px 0"
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    flexGrow: 0.25,
    width: "70px",
    height: "50px",
    alignSelf: "flex-end"
  }
});

const ContactList = () => {
  const classes = useStyles();
  const history = useHistory();
  const [dialogToggle, setDialogToggle] = useState(false);
  const [createContact] = useMutation(CREATE_CONTACT);

  const { loading, error, data } = useQuery(GET_CONTACTS);
  if (error) return <p>Error :( {error.message}</p>;

  const handleCreate = (contact: IContact) => {
    createContact({ variables: { name: contact.name, email: contact.email } });
    setDialogToggle(false);
    window.location.reload();
  };

  return (
    <Container>
      {loading ? (
        <CircularProgress size={40} thickness={5} />
      ) : (
        <React.Fragment>
          <CreateContactDialog
            open={dialogToggle}
            onCreate={handleCreate}
            onCancel={() => setDialogToggle(false)}
          />
          <div className={classes.header}>
            <Typography variant="h3">Contacts</Typography>
            <Button
              data-testid="create-contact-button"
              className={classes.button}
              onClick={() => setDialogToggle(true)}
            >
              CREATE
            </Button>
          </div>
          <div id="contact-list-container">
            {data.contacts.map((contact: IContact, idx: number) => (
              <ContactCard
                key={contact.id}
                name={contact.name}
                email={contact.email}
                data-testid={`${idx}-contact-card`}
                onClick={() => history.push(`/contact/${contact.id}`)}
              />
            ))}
          </div>
        </React.Fragment>
      )}
    </Container>
  );
};

export default ContactList;
