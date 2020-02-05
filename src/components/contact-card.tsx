import { Avatar, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { IContact } from "../types";
import { getInitials } from "../utils";

const useStyles = makeStyles({
  container: {
    border: "2px solid red",
    maxWidth: "980px",
    width: "100%",
    height: "calc(100vh - 120px)",
    margin: "50px auto 0"
  },
  contactCard: {
    height: "100px",
    display: "flex",
    padding: "50px",
    margin: "15px 0",
    alignItems: "center",
    justifyContent: "flex-start",
    cursor: "pointer"
  },
  contactDetails: {
    marginLeft: "15px"
  },
  contactAvatar: {
    height: 50,
    width: 50
  }
});

interface IContactCard extends IContact {
  onClick: () => void;
}

const ContactCard = ({ email, name, onClick, ...props }: IContactCard) => {
  const classes = useStyles();
  const initials = getInitials(name);

  return (
    <Card className={classes.contactCard} onClick={onClick} {...props}>
      <Avatar>{initials}</Avatar>
      <div className={classes.contactDetails}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="subheading">{email}</Typography>
      </div>
    </Card>
  );
};

export default ContactCard;
