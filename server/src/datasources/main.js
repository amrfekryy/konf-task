const { DataSource } = require('apollo-datasource');
const path = require('path')
const fs = require('fs')

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
    
    // delete old photo
    if (photo && photo != item.photo) this.deletePhoto(item.photo)
    item.photo = photo

    await item.save()

    return { success: true, item }
  }

  async deleteItem({ id }) {
    
    const item = await this.store.items.findByPk(id)    
    if (item.photo) this.deletePhoto(item.photo)
    await item.destroy()
    
    return { success: true }
  }

  deletePhoto(photo) {
    const { base } = path.parse(photo)
    const pathName = path.join(__dirname, '../../public/photos/', base)
    try { fs.unlinkSync(pathName) } catch (err) {}
  }

  async uploadFile({ file }) {
    const { createReadStream, filename, mimetype, encoding } = await file

    const { ext } = path.parse(filename)
    const randomString = Math.random().toString(36).substring(7)
    const fileName = randomString + ext
    
    const pathName = path.join(__dirname, '../../public/photos/', fileName)
    
    const stream = createReadStream()
    await stream.pipe(fs.createWriteStream(pathName))

    return { success: true, photo: `http://localhost:4000/photos/${fileName}` }
  }

}

module.exports = MainAPI;
