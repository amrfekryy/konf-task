const SQL = require('sequelize')

module.exports.createStore = () => {
  
  // database configuration
  const db = new SQL('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './store.sqlite',
    logging: false,
  });
  
  // test database connection
  db.authenticate()
  .then(() => console.log('Successful DB connection'))
  .catch(err => console.error('Failed DB connection:', err))

  // define models
  const items = db.define('item', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
    name: SQL.STRING,
    type: SQL.STRING,
    price: SQL.FLOAT,
    photo: SQL.STRING
  });

  // register models
  items.sync() // pass {force: true} to drop table upon connection

  return { items, }
};
