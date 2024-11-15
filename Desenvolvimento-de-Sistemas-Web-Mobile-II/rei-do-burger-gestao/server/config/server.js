const PORT = process.env.PORT || 8000
const hostUrl = `http://localhost:${PORT}`

// Alterne entre "firebase" ou "mongodb"!
const databaseName = "firebase"

module.exports = { hostUrl, PORT, databaseName }