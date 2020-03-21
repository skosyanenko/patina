'use strict';
module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        title: DataTypes.STRING,
        viewType: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        likes: DataTypes.INTEGER,
        pictures: DataTypes.ARRAY(DataTypes.STRING)
    }, {});
    Review.associate = function({ User, Comment, Book }) {
        Review.belongsTo(Book, { as: 'book' });
        Review.belongsTo(User);
        // Review.hasMany(Comment);
    };
    return Review;
};