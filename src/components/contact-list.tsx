import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { IContact } from "../types";
import ContactCard from "./contact-card";
import Container from "./container";

const useStyles = makeStyles({
  container: {
    maxWidth: "980px",
    width: "100%",
    height: "calc(100vh - 120px)",
    margin: "50px auto 0"
  },
  title: {
    paddingBottom: "15px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    flexGrow: 0.25,
    width: "70px"
  }
});

interface IContactList {
  contacts: IContact[];
}

const ContactList = ({ contacts }: IContactList) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.header}>
        <Typography className={classes.title} variant="h3">
          Contacts
        </Typography>
        <Button className={classes.button}>CREATE</Button>
      </div>
      {contacts.map(contact => (
        <ContactCard
          key={contact.id + contact.name}
          name={contact.name}
          email={contact.email}
          onClick={() => console.log(contact.id)}
        />
      ))}
    </Container>
  );
};

export default ContactList;
