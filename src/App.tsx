import { CssBaseline } from "@material-ui/core";
import React from "react";
import Contact from "./components/contact";
import Header from "./components/header";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      {/* <ContactList
        contacts={[{ name: "Phillip Boateng", email: "phil@mail.com" }]}
      /> */}
      <Contact name="Phillip Boateng" email="phil@mail.com" />
    </React.Fragment>
  );
};

export default App;
