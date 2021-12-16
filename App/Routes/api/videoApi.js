const router = require("express").Router();
const videoController = require('../../Controllers/videoController.js');

router.get('/videoBySlab/:id', videoController.getVideoBySlabId)

router.get('/videoById/:id', videoController.getVideoById)

module.exports = router;