const router = require("express").Router();
const contentController = require('../../Controllers/contentController.js')

router.get('/contentBySlab/:id', contentController.getContentBySlab)

module.exports = router;