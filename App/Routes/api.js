const router = require("express").Router();

const apiCourses = require('./api/courseApi')
const apiSlabs = require('./api/slabApi')
const apiActivities = require('./api/activityApi')
const apiAutovaluation = require('./api/autovaluationApi')
const apiContent = require('./api/contentApi')
const apiVideo = require('./api/videoApi')

router.use("/courses", apiCourses);
router.use("/slabs", apiSlabs);
router.use("/activities", apiActivities);
router.use("/autovaluations", apiAutovaluation);
router.use("/content", apiContent)
router.use("/videos", apiVideo)

module.exports = router;
