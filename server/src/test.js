const MainAPI = require('./datasources/main');
const { createStore } = require('./utils');

const store = createStore();

test('Should add and delete item successfully', async () => {
  const mainAPI = await new MainAPI ({ store })
  // successful response after adding item
  const res1 = await mainAPI.addItem({ type: 'Main Course', name: 'Pizza', price: 10 })
  expect(res1.success).toBe(true)
  expect(res1.resMessage).toBe('Successful Database Operation')
  expect(res1.item).toBeDefined()
  // item was actually added to database
  const itemFromDB = await store.items.findByPk(res1.item.id)
  expect(itemFromDB.dataValues).toEqual(res1.item.dataValues)
  // successful response after deleting item 
  const res2 = await mainAPI.deleteItem({ id: res1.item.id })
  expect(res2.success).toBe(true)
  // item was actually deleted from database
  const deletedItem = await store.items.findByPk(res1.item.id)
  expect(deletedItem).toBeNull()
})

test('Should fail to add item', async () => {
  const mainAPI = await new MainAPI ({ store })
  // failed reponse when missing a required field
  const { success, resMessage, item } = await mainAPI.addItem({ type: null, name: 'Pizza', price: 10 })
  expect(success).toBe(false)
  expect(resMessage).toBe('Missing required field')
  expect(item).toBeNull()
})
