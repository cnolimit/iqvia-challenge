import { ApolloProvider } from "@apollo/react-hooks";
import { CssBaseline } from "@material-ui/core";
import ApolloClient from "apollo-boost";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/contact";
import ContactList from "./components/contact-list";
import Header from "./components/shared/header";

const client = new ApolloClient({
  uri: "/"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <Header />
      <Router>
        <Switch>
          <Route path="/contact/:id">
            <Contact />
          </Route>
          <Route path="/">
            <ContactList />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
