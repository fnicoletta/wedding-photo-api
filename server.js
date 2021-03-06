const app = require('./app.js')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`app running on ${port}`)
})
