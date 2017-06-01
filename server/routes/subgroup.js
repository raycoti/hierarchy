const db = require('../../db')
const router = require('express').Router();
const Sequelize = require('sequelize');
const SubGroup = require('../../db/models').SubGroup;
module.exports = router;

router.get('/subgroups/:groupId', (req, res, next) => {
  SubGroup.findAll({where: {groupId: req.params.groupId}})
  .then((groups) => {
    res.send(groups);
  });
});

router.get('/subgroup/:id', (req, res, next) =>{
  SubGroup.findOne({
    where: { id: req.params.id}
  })
  .then((group) => {
    res.send(group);
  })
  .catch(next);
});
//need to test both these out ^ v
router.put('./subgroup/:id', (req, res, next) => {
  SubGroup.update(req.body, {where: {id: req.params.id}})
  .then(updatedGroup => res.json(updatedGroup))
  .catch(next);
});
