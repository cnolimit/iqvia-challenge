# IQVIA Frontend Challenge

### Brief Description

The project consumes the GraphQL API and provides a frontend client which allows you to
view and manipulate the data from the API easier. This project will have the following
functionalities

- Display list of contacts with thier properties `{name, email}`
- View a specific contact
- Create a new contact, specifying the two properties, {name, email}
- Edit any of the two properties for each contact
- Delete any of the contacts

### Time to Complete

In total ~6 Hours

### Modules

| Module       | Why?                                                                                                                                          |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| graphql-tag  | graphql-tag is a utility which helps parses graphql queries allowing you to have an effective way of specify variables to pass into the query |
| apollo-boost | apollo-boost is a simple zero-config package to help quickly get started with the apollo-client                                               |
| @material-ui | material-ui is a robost ui framework which provides react components which strictly follow the official material guidelines                   |
| react-router | a simple library for handling routing within react applications                                                                               |
| cypress      | a testing tool that makes it easier perform integration testing                                                                               |

### Hardest Area

- I had difficulties working out the best way to manage the data across the app

### Proudest Area

- Working out the best way to structure components and files to improve readbility
- Determining the best way to isolate components and thier responsibilities

---

## Getting Started

You will need to run the API and the frontend seperately.

To run the API you will need run the command

```
  npm run gql
```

To start the frontend run the command

```
  npm start
```

To run the integration tests run the command

```
  npm run cypress-tests
```

To run the unit tests run the command

```
  npm run tests
```
