const router = require("express").Router();
const autovaluationController = require('../../Controllers/autovaluationController')

router.get('/autovaluationBySlabId/:id', autovaluationController.getAutovaluationBySlabId)

module.exports = router;