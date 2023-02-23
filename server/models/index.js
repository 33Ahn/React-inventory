const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')
//define model
const Item = sequelize.define("items", {
  title: Sequelize.STRING,
  description:Sequelize.STRING,
  price:Sequelize.NUMBER,
  category:Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Item,
};
