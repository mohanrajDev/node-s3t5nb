module.exports = {
  development: {
    username: null,
    password: null,
    database: 'mrrp',
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'database.db',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
