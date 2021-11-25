const router = require("express").Router();

const apiCourses = require('./api/courseApi')
const apiSlabs = require('./api/slabApi')
const apiActivities = require('./api/activityApi')

router.use("/courses", apiCourses);
router.use("/slabs", apiSlabs);
router.use("/activities", apiActivities);

module.exports = router;
