const router = require("express").Router();
const activityController = require('../../Controllers/activityController')

router.get('/activityById/:id', activityController.getActivityById)

module.exports = router;