import { gql } from 'graphql-tag';
export default gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
    deleteBook(id:ID!): Book
  }
`;
