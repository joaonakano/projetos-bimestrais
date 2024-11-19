const admin = require("firebase-admin");
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY);

let app
let db
let auth

const initializeFirebaseApp = () => {
    app = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    db = admin.firestore()
    auth = admin.auth()
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

const getAuth = () => {
    if(!auth) {
        throw new Error("Auth is not initialized!")
    }
    return auth
}

module.exports = { getDb, getApp, getAuth, initializeFirebaseApp }