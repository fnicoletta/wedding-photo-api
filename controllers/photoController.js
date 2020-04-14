const fs = require('fs')
const weddingPhotos = JSON.parse(
	fs.readFileSync(`${__dirname}/../api/wedding.json`)
)

exports.checkID = (req, res, next, val) => {
	req.params.id * 1 > weddingPhotos.length &&
		res.status(404).json({ status: 'fail', message: 'Invalid ID' })
	next()
}

exports.getAllPhotos = (req, res) => {
	res.status(200).json({
		status: 'success',
		results: weddingPhotos.length,
		data: {
			weddingPhotos,
		},
	})
}

exports.getPhoto = (req, res) => {
	const id = req.params.id * 1
	const photo = weddingPhotos.find((el) => el.id === id)

	res.status(200).json({
		status: 'success',
		data: {
			photo,
		},
	})
}

exports.createPhoto = (req, res) => {
	const newId = weddingPhotos[weddingPhotos.length - 1].id + 1
	const newPhoto = Object.assign({ id: newId }, req.body)
	weddingPhotos.push(newPhoto)
	fs.writeFile(
		`${__dirname}/api/wedding.json`,
		JSON.stringify(weddingPhotos),
		(err) => {
			res.send(201).json({
				status: 'success',
				data: {
					weddingPhotos: newPhoto,
				},
			})
		}
	)
}

exports.updatePhoto = (req, res) => {
	res.status(200).json({
		data: {
			photo: '<Updated photo here>',
		},
	})
}

exports.deletePhoto = (req, res) => {
	res.status(204).json({
		data: null,
	})
}
