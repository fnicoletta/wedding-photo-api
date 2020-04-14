const express = require('express')
const morgan = require('morgan')
const photoRouter = require('./routes/photoRoutes')
const app = express()

//Middleware
app.use(morgan('dev'))
app.use(express.json())

app.use((req, res, next) => {
	console.log('middleware')
	next()
})

//routes
app.use('/api/v1/photos', photoRouter)

module.exports = app
