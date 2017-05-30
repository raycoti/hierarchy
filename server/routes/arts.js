const db = require('../../db')
const router = require('express').Router();
const Sequelize = require('sequelize');
const Art = require('../../db/models').Art;
module.exports = router;
router.get('/arts', (req, res, next) => {

  Art.findAll({})
  .then((arts) => {
    res.send(arts);
  })
})

router.get('/arts/:name', (req, res, next) =>{
  Art.findOne({
    where: { name: req.params.name}
  })
   .then((art) => {
    res.send(art)
  })
})
