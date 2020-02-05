import gql from "graphql-tag";

export const EDIT_CONTACT = gql`
  mutation UpdateContact($id: ID, $name: String!, $email: String!) {
    updateContact(contact: { id: $id, name: $name, email: $email }) {
      name
      email
    }
  }
`;

export const CREATE_CONTACT = gql`
  mutation AddContact($name: String!, $email: String!) {
    addContact(contact: { name: $name, email: $email }) {
      name
      email
    }
  }
`;

export const DELETE_CONTACT = gql`
  mutation DeleteContact($id: ID) {
    deleteContact(id: $id)
  }
`;
