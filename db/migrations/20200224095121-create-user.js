'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      telegram: {
        type: Sequelize.STRING
      },
      vk: {
        type: Sequelize.STRING
      },
      books: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      genres: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      authors: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      news: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      tops: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      bookmarks: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      reviews: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      followers: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      follow: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
