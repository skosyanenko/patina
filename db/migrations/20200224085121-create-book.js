'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coverImage: {
        type: Sequelize.STRING
      },
      bookImage: {
        type: Sequelize.STRING
      },
      shortDescription: {
        type: Sequelize.TEXT
      },
      fullDescription: {
        type: Sequelize.TEXT
      },
      quote: {
        type: Sequelize.STRING
      },
      ratingCount: {
        type: Sequelize.INTEGER
      },
      ratingTotal: {
        type: Sequelize.INTEGER
      },
      readLink: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Books');
  }
};