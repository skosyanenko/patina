'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const content = [{
      BookId: 1,
      AuthorId: 1
    },
      {
        BookId: 2,
        AuthorId: 2,
      },
      {
        BookId: 2,
        AuthorId: 3,
      },
      {
        BookId: 3,
        AuthorId: 6
      },
      {
        BookId: 4,
        AuthorId: 11
      },
      {
        BookId: 5,
        AuthorId: 13
      },
      {
        BookId: 6,
        AuthorId: 14
      },
      {
        BookId: 7,
        AuthorId: 15
      },
      {
        BookId: 8,
        AuthorId: 16
      },
    ];

    const result = content.map(item => {
      item.createdAt = new Date();
      item.updatedAt = new Date();
      return item;
    });

      return queryInterface.bulkInsert('booksAuthor', result, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('booksAuthor', null, {});
  }
};
