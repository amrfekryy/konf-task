module.exports = {
  Query: {
    getItems: async (_, __, { dataSources }) => await dataSources.mainAPI.getItems(),
    getItem: async (_, args, { dataSources }) => await dataSources.mainAPI.getItem(args),
  },
  Mutation: {
    addItem: async (_, args, { dataSources }) => await dataSources.mainAPI.addItem(args),
    updateItem: async (_, args, { dataSources }) => await dataSources.mainAPI.updateItem(args),
    deleteItem: async (_, args, { dataSources }) => await dataSources.mainAPI.deleteItem(args),
  }
};
