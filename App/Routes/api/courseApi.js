const router = require("express").Router();
const courseController = require('../../Controllers/coursesController')

router.get('/courseById/:id', courseController.getCourseById)

module.exports = router;