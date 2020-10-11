require('dotenv').config()
const got = require('got')

const {API_KEY, API_SECRET, CLOUD_NAME} = process.env
const auth = `${API_KEY}:${API_SECRET}`
const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image/upload?max_results=500`

module.exports = async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	const response = await got(url, {
		username: API_KEY,
		password: API_SECRET,
		json: true
	})
	return response.body
}

