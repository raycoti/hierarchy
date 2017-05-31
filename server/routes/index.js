const router = require('express').Router();
const personRouter = require('./person');
const relationshipRouter = require('./relationship');
const subGroupRouter = require('./subgroup');
const groupRouter = require('./group');

module.exports = router;

router.use(personRouter);
router.use(relationshipRouter);
router.use(subGroupRouter);
router.use(groupRouter);
