import { gql } from 'graphql-tag';

export default gql`
  type City {
    id: ID!
    city: String!
    state: String!
    no_of_property: Int!
  }

  type Query {
    getCities: [City!]!
  }
`;
