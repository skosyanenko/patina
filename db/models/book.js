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
            as: 'categories'
        });
        Book.belongsToMany(Author, {
            through: 'booksAuthor',
            as: 'authors'
        });
        Book.belongsToMany(Chart, {
            through: 'booksCharts',
            as: 'charts'
        });
        Book.hasMany(Film, {
            as: 'films'
        });
        Book.hasMany(Review, {
            as: 'reviews'
        });
        // Book.hasMany(Comment);
    };
    return Book;
};