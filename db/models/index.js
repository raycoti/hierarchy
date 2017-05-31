'use strict';

const Group = require('./group');
const SubGroup = require('./subGroup');
const Person = require('./person');
const relationship = require('./relationship');

Group.hasMany(Person);
SubGroup.belongsToMany(Person, {through: relationship});// make additional model for these relation tables
//Group.hasMany(Person, {through: 'relationship'})
/*
person_group|relaitonship{
	//person id and children

	role:{

	}
	children:{

	}
}


group_relations{
	children:[id,id,id,id]
}
*/
/*Group.hasMany(Relationship, {through: 'group_relations'});// see lair depot to see how to add to a through table

Relationship.belongsTo(Group);*///belongstomany figure out how many to many works.
Person.belongsToMany(SubGroup, {through: relationship});
Person.belongsTo(Group);

//same as above 


module.exports = {Group, SubGroup, Person, relationship};
