'use strict'
var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('projects', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageUrl: Sequelize.STRING,
}
)
