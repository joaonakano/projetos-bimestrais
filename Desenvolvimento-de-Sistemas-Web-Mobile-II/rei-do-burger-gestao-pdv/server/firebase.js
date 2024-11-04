const admin = require("firebase-admin")
var serviceAccountKey = require("./serviceAccountKey.json")

let app
let firestoreDb

const uploadData = async () => {
  const dataToUpload = {
    key1: 'test',
    key2: 'test',
    key3: 'test'
  }

  const dataUpdated = await firestoreDb.collection("pedidos").doc().set(dataToUpload)
  return dataUpdated
}

const initializeFirebaseApp = () => {
  app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey)
  })
  firestoreDb = admin.firestore()
  return app
}

const getFirebaseApp = () => app

module.exports = { initializeFirebaseApp, getFirebaseApp, uploadData }