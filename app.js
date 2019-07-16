const { ApolloServer } = require('apollo-server');

const api = require('./data/api');
const typeDefs = require('./data/schema');


console.log(api, typeDefs);

const resolvers = {
  Query: {
    books: () => api.books,
    countries: () => api.countries
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
