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
    item.photo = photo
    await item.save()

    return { success: true, item }
  }

  async deleteItem({ id }) {
    
    const item = await this.store.items.findByPk(id)

    // delete photo if any
    if (item.photo) {
      const photoName = item.photo.split('/').pop()
      const pathName = path.join(__dirname, '../../public/photos/', photoName)
      fs.unlinkSync(pathName);
    }
    
    await item.destroy()
    
    return { success: true }
  }

  async uploadFile({ file, itemId }) {
    const { createReadStream, filename, mimetype, encoding } = await file
    // console.log({ filename, mimetype, encoding })

    const lastCreatedItem = await this.store.items.findAll({
      limit: 1, order: [['createdAt', 'DESC' ]]
    })
    
    const ID = itemId ? itemId : lastCreatedItem[0].id + 1
    const extension = filename.split('.').pop()
    const fileName = `photo${ID}.${extension}`
    
    const pathName = path.join(__dirname, '../../public/photos/', fileName)
    
    const stream = createReadStream()
    await stream.pipe(fs.createWriteStream(pathName))

    return { success: true, photo: `http://localhost:4000/photos/${fileName}` }
  }

}

module.exports = MainAPI;
