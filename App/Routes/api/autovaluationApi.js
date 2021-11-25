const router = require("express").Router();
const autovaluationController = require('../../Controllers/autovaluationController')

router.get('/autovaluationById/:id', autovaluationController.getAutovaluationById)

module.exports = router;