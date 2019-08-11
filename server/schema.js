const { gql } = require('apollo-server');

const typeDefs = gql`
  type Country {
    name: String!
    population: String!
    inNato: Boolean!
    id: Int!
  }

  type Query {
    countries: [Country],
    country(id: Int!): Country,
  }
`;

module.exports = typeDefs;
