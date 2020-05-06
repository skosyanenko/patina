module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    user: process.env.DATABASE_USERNAME,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD
  }
};
