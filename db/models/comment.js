'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.STRING
  }, {});
  Comment.associate = function({User}) {
    Comment.hasOne(User, {as: 'userId'});
  };
  return Comment;
};
