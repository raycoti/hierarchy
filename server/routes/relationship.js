const router = require('express').Router();
const Sequelize = require('sequelize');
const Relationship = require('../../db/models').relationship;
const Person = require('../../db/models').Person;
module.exports = router;
router.get('/relationships/:subGroupId', (req, res, next)=> {
  Relationship.findAll({where: {subGroupId: req.params.subGroupId}})
  .then(relationships => {
     //returns an array
    // relationships.reduce(){
    const hierarchy = relationships.reduce((acc,cur)=>{
       acc[cur.personId] = {
         children: cur.children,
         role: cur.role
        };
        return acc;
      }, {});
    res.send(hierarchy)

    /*[{
        Id: 1,
        children: '2,3,4',
        role: 'committie lead',
        groupId: 1,
        personId 1,
      },
      {
        Id: 2,
        children: '5,6',
        role: 'Treasurer',
        groupId: 1,
        personId 2,
      }
      ]
    */
  })
  .catch(next);
});
