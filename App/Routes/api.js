const router = require("express").Router();

const apiCourses = require('./api/courseApi')
const apiSlabs = require('./api/slabApi')
const apiActivities = require('./api/activityApi')
const apiAutovaluation = require('./api/autovaluationApi')

router.use("/courses", apiCourses);
router.use("/slabs", apiSlabs);
router.use("/activities", apiActivities);
router.use("/autovaluations", apiAutovaluation);

module.exports = router;
