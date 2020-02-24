'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    city: DataTypes.STRING,
    password: DataTypes.STRING,
    sex: DataTypes.STRING,
    avatar: DataTypes.STRING,
    telegram: DataTypes.STRING,
    vk: DataTypes.STRING,
    books: DataTypes.ARRAY(DataTypes.STRING),
    genres: DataTypes.ARRAY(DataTypes.STRING),
    authors: DataTypes.ARRAY(DataTypes.STRING),
    news: DataTypes.ARRAY(DataTypes.INTEGER),
    tops: DataTypes.ARRAY(DataTypes.INTEGER),
    bookmarks: DataTypes.ARRAY(DataTypes.INTEGER),
    reviews: DataTypes.ARRAY(DataTypes.INTEGER),
    followers: DataTypes.ARRAY(DataTypes.INTEGER),
    follow: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {});
  User.associate = function({News, Chart, Book, Review}) {
  	// User.hasMany(News, {as: 'markedNews'});
  	// User.hasMany(Chart, {as: 'markedCharts'});
  	// User.hasMany(Review, {as: 'markedReviews'});
	// User.hasMany(Book, {
	// 	as: 'preferredBooks',
	// 	constraints: false,
	// 	allowNull: true,
	// 	defaultValue:  null
	// });
  };
  return User;
};
