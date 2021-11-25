const router = require("express").Router();
const slabController = require('../../Controllers/slabController')

router.get('/slabs/', slabController.getSlabs)

router.get('/slabsByCourseId/:id', slabController.getSlabsByCourseId)

router.get('/slabById/:id', slabController.getSlabById)

module.exports = router;