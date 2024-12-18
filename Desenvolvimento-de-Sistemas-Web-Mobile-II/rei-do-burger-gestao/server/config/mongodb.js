const { MongoClient } = require("mongodb")

const url = "mongodb://127.0.0.1:27017" // Caso o localhost de algum erro, usar: 127.0.0.1
const dbName = "rei-do-burger"

let db

const connectToMongo = async () => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
    await client.connect()
    console.log("-> MongoDB initialized successfully!")
    db = client.db(dbName)
}

const getDb = () => {
    if (!db) {
        throw new Error("Database not initialized. Call connectToMongo first.");
    }
    return db;
}

module.exports = { connectToMongo, getDb }