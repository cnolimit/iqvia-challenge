import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  header: {
    width: "100%",
    height: "70px",
    backgroundColor: "blue",
    justifyContent: "space-between"
  },
  title: {
    flexGrow: 1,
    justifySelf: "center",
    color: "white !important"
  },
  nav: {
    flexGrow: 1,
    listStyle: "none",
    padding: 0,
    margin: 0
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <Typography variant="h4" className={classes.title}>
          Contacts Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
