const db = require('../../db')
const router = require('express').Router();
const Sequelize = require('sequelize');
const Group = require('../../db/models').Group;
module.exports = router;

router.get('/groups', (req, res, next) => {
  Group.findAll({})
  .then((groups) => {
    res.send(groups);
  });
});

router.get('/group/:id', (req, res, next) =>{
  Group.findOne({
    where: { id: req.params.id}
  })
  .then((group) => {
    res.send(group);
  })
  .catch(next);
});

//need to test both these out ^ v
router.put('./group/:id', (req, res, next) => {
  Group.update(req.body, {where: {id: req.params.id}})
  .then(updatedGroup => res.json(updatedGroup))
  .catch(next);
});
