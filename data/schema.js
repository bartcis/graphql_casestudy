const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Country {
    name: String
    population: String
    inNato: Boolean
    id: String
  }

  type Query {
    books: [Book],
    countries: [Country],
  }
`;

module.exports = typeDefs;
