'use strict';
module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define('News', {
        viewType: DataTypes.INTEGER,
        title: DataTypes.STRING,
        cover: DataTypes.STRING,
        description: DataTypes.TEXT,
        likes: DataTypes.INTEGER,
        views: DataTypes.INTEGER,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    }, {});
    News.associate = function(models) {
        News.hasMany(models.Comment, { as: 'comments' });
    };
    return News;
};