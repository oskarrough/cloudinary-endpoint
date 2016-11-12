const request = require('request-promise')
require('dotenv').config({silent: true})

const {API_KEY, API_SECRET, API_NAME} = process.env
const url = `https://${API_KEY}:${API_SECRET}@api.cloudinary.com/v1_1/${API_NAME}/resources/image`

module.exports = async () => await request(url)

