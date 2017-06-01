const router = require('express').Router();
const Sequelize = require('sequelize');
const Person = require('../../db/models').Person;
module.exports = router;

router.get('/persons/:groupId', (req, res, next) => {
  Person.findAll({where:{groupId: req.params.groupId}})
  .then((persons) => {
    res.send(persons.reduce((acc, cur) => {
      acc[cur.id] = {
        name: cur.name,
        des: cur.description
      }
      return acc;
    }, {}));
  })
})

router.get('/person/:id', (req, res, next) => {
  Person.findOne({
    where: { id: req.params.id}
  })
   .then((person) => {
    res.send(person);
  })
    .catch(next);
});
//post
router.post('/persons', (req, res, next) => {
  Person.create(req.body)
  .then(newPerson => res.json(newPerson))
  .catch(next);
});

//put TODO:
router.put('/person/:id', (req, res, next) => {
  Person.update(req.body, {where: { id: req.params.id}})
  .then(updatedPerson => res.json(updatedPerson))
  .catch(next);
});
//delete

router.delete('/person/:id', (req, res, next) => {
  Person.delete({where: { id: req.params.id}})
  .then(deleted => res.json(deleted))
  .catch(next);
}); //need to test these out soon
