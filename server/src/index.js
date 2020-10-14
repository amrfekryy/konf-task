const { ApolloServer } = require('apollo-server-express');
const express = require('express')
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

const app = express()
server.applyMiddleware({ app })
app.use(express.static('public'))

app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000`);
});
