const projectRouter = require('./projects');
const artRouter = require('./arts');
const router = require('express').Router();

module.exports = router;

router.use(projectRouter);
router.use(artRouter);
