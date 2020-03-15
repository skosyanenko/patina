'use strict';
module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        coverImage: DataTypes.STRING,
        bookImage: DataTypes.STRING,
        shortDescription: DataTypes.TEXT,
        fullDescription: DataTypes.TEXT,
        quote: DataTypes.STRING,
        weight: DataTypes.INTEGER,
        title: DataTypes.STRING,
        readLink: DataTypes.STRING,
        ratingCount: DataTypes.INTEGER,
        ratingTotal: DataTypes.INTEGER,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    }, {});
    Book.associate = ({ Author, Film, Review, Category, Comment, Chart }) => {
        Book.belongsToMany(Category, {
            through: 'booksCategory',
            as: 'bookHasCategories'
        });
        Book.belongsToMany(Author, {
            through: 'booksAuthor',
            as: 'bookHasAuthors'
        });
        Book.belongsToMany(Chart, {
            through: 'booksCharts',
            as: 'bookHasCharts'
        });

        Book.hasMany(Film);
        Book.hasMany(Review);
        // Book.hasMany(Comment);
    };
    return Book;
};