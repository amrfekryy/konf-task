const { gql } = require('apollo-server');

const typeDefs = gql`

  type Item {
    id: ID!
    name: String!
    type: String!
    price: Float!
    photo: String
  }

  type Query {
    getItems: Response!
    getItem(id: ID!): Response!
  }
  
  type Mutation {
    
    addItem(    
      name: String!
      type: String!
      price: Float!
      photo: String
    ): Response!
    
    updateItem(
      id: ID!
      name: String!
      type: String!
      price: Float!
      photo: String!
    ): Response!

    deleteItem(id: ID!): Response!

  }
  
  type Response {
    success: Boolean!
    resMessage: String
    items: [Item]
    item: Item
  }
`;

module.exports = typeDefs;
