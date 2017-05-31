'use strict'
var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('subGroups', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  leadID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
}
);
