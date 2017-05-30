'use strict'
var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('relationships', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
}
);
