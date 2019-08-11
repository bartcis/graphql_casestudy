const { ApolloServer } = require('apollo-server');

const api = require('./server/api');
const typeDefs = require('./server/schema');

const resolvers = {
  Query: {
    countries: () => api.countries,
    country: (obj, args) => {
      for (const record of api.countries) {
        if (record.id === args.id) {
          return record;
        }
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
