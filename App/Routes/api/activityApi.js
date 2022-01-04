const router = require("express").Router();
const activityController = require('../../Controllers/activityController');
const { route } = require("./contentApi");

router.get('/activityById/:id', activityController.getActivityById)

router.get('/activityBySlabId/:slabId', activityController.getActivityBySlabId)

module.exports = router;