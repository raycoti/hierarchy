const db = require('../../db')
const router = require('express').Router();
const Sequelize = require('sequelize');
const Project = require('../../db/models').Project;
module.exports = router;
router.get('/projects', (req, res, next) => {

  Project.findAll({})
  .then((projects) => {
    res.send(projects);
  })
})

router.get('/projects/:name', (req, res, next) =>{
  Project.findOne({
    where: { name: req.params.name}
  })
   .then((project) => {
    res.send(project)
  })
})
