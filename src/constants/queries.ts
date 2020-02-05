import { gql } from "apollo-boost";

export const GET_CONTACTS = gql`
  {
    contacts {
      id
      name
      email
    }
  }
`;

export const GET_CONTACT = gql`
  query GetContact($id: ID) {
    contact(id: $id) {
      id
      name
      email
    }
  }
`;
