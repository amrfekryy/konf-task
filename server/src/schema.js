const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Item {
    id: ID!
    name: String!
    type: String!
    price: Float!
    photo: String
  }

  # type File {
  #   filename: String!
  #   mimetype: String!
  #   encoding: String!
  # }

  type Query {
    getItems: Response!
    getItem(id: ID!): Response!
    # uploads: [File]
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
      name: String
      type: String
      price: Float
      photo: String
    ): Response!

    deleteItem(id: ID!): Response!

    uploadFile(file: Upload! itemId: ID): Response!

  }
  
  type Response {
    success: Boolean!
    resMessage: String
    items: [Item]
    item: Item
    photo: String
  }
`;

module.exports = typeDefs;
