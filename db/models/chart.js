'use strict';
module.exports = (sequelize, DataTypes) => {
    const Chart = sequelize.define('Chart', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    }, {});
    Chart.associate = function({ Book, Comment }) {
        Chart.belongsToMany(Book, {
            through: 'booksCharts',
            as: 'books'
        });
    };
    return Chart;
};