'use strict'
var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('relationships', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  children: {
    type: Sequelize.STRING, //element split ',' to create array
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  }
  //parent??
  //subgroup id
  //person id
}
);


//what if we always have the same people?
