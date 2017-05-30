'use strict';

const Group = require('./group');
const Person = require('./person');
const Relationship = require('./relationship');
Group.hasMany(Person, {through: 'person_group'});//through
Group.hasMany(Relationship, {through: 'group_relations'});

Relationship.belongsTo(Group);//belongstomany figure out how many to many works.
Person.belongsTo(Group);//same as above 


module.exports = {Group, Person, Relationship};
