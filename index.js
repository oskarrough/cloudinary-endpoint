const request = require('request-promise')
require('dotenv').config({silent: true})

const {API_KEY, API_SECRET, API_NAME} = process.env
const url = `https://${API_KEY}:${API_SECRET}@api.cloudinary.com/v1_1/${API_NAME}/resources/image/upload?max_results=500`

module.exports = async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	return await request(url)
}

