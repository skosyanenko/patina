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
        type: Sequelize.ARRAY
      },
      tops: {
        type: Sequelize.ARRAY
      },
      bookmarks: {
        type: Sequelize.ARRAY
      },
      reviews: {
        type: Sequelize.ARRAY
      },
      followers: {
        type: Sequelize.ARRAY
      },
      follow: {
        type: Sequelize.ARRAY
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
