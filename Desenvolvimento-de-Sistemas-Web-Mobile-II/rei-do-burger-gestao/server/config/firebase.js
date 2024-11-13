let admin = require("firebase-admin");
let serviceAccount = require("./serviceAccountKey.json");

let app
let db

const initializeFirebaseApp = () => {
    app = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    db = admin.firestore()
    console.log("-> Firebase initialized successfully!")
}

const getDb = () => {
    if (!db) {
        throw new Error("Firebase/Firestore is not initialized!")
    }
    return db
}

const getApp = () => {
    if (!app) {
        throw new Error("Firebase App is not initialized!")
    }
    return app
}

module.exports = { getDb, getApp, initializeFirebaseApp }