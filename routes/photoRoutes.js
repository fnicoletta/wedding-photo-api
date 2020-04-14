const express = require('express')
const tourController = require('./../controllers/photoController')
const router = express.Router()

router.param('id', tourController.checkID)

router
	.route('/')
	.get(tourController.getAllPhotos)
	.post(tourController.createPhoto)
router
	.route('/:id')
	.get(tourController.getPhoto)
	.patch(tourController.updatePhoto)
	.delete(tourController.deletePhoto)

module.exports = router
