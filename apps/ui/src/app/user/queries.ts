import { gql } from '@apollo/client';

export const GET_USERS = gql`
  {
    getUsers {
      id
      name
      email
      dateOfBirth
      department
      status
    }
  }
`;
