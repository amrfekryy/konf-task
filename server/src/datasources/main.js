const { DataSource } = require('apollo-datasource');

class MainAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getItems() {
    const items = await this.store.items.findAll()
    return { success: true, items }
  }

  async getItem({ id }) {
    const item = await this.store.items.findByPk(id);
    return { success: true, item }
  }

  async addItem(args) {
    const item = await this.store.items.create(args)
    return { success: true, item }
  }

  async updateItem({ id, name, type, price, photo }) {
    const item = await this.store.items.findByPk(id);
    item.name = name
    item.type = type
    item.price = price
    item.photo = photo
    await item.save()

    return { success: true, item }
  }

  async deleteItem({ id }) {
    const item = await this.store.items.findByPk(id)
    await item.destroy()
    
    return { success: true }
  }
}

module.exports = MainAPI;