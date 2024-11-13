const PORT = process.env.PORT || 8000
const hostUrl = `http://localhost:${PORT}`
const databaseName = "mongodb"             // Alterne entre "firebase" ou "mongodb"!

module.exports = { hostUrl, PORT, databaseName }