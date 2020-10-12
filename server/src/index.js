const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const MainAPI = require('./datasources/main');
const { createStore } = require('./utils');

const store = createStore();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    mainAPI: new MainAPI({ store }),
  }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
