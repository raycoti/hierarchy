'use strict'
var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('groups', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  headID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
}
);
