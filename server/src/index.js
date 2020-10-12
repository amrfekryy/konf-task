const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
// const resolvers = require('./resolvers');
// const { createStore } = require('./utils');

// const GeneralAPI = require('./datasources/general');

// const store = createStore();

const server = new ApolloServer({
  typeDefs,
  // resolvers,
  // dataSources: () => ({
  //   generalAPI: new GeneralAPI({ store }),
  //   userAPI: new UserAPI({ store }), 
  // }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
