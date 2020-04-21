module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    user: 'postgres',
    database: 'patina-strapi',
    password: "151237"
  }
};
