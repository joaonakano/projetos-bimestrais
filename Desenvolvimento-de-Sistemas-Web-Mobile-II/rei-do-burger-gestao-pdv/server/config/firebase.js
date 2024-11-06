const admin = require("firebase-admin")
var serviceAccountKey = require("./serviceAccountKey.json")

let app
let db

// Core Utils - Firebase
const initializeFirebaseApp = () => {
  app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey)
  })

  db = admin.firestore()
  return app
}

const getFirebaseApp = () => app


// Operações CRUD para o Firestore
const uploadData = async (data) => {
  const dataToUpload = data
  const orderRef = db.collection("pedidos")
  const docRef = await orderRef.doc().set(dataToUpload)
  return docRef
}

const fetchAllData = async () => {
  const orderRef = db.collection("pedidos")
  const snapshot = await orderRef.get()
  let data = []

  snapshot.forEach(doc => {
    let fetchedData = doc.data() 
    data.push({
      id: doc.id,
      pedido: fetchedData.pedido,
      cliente: fetchedData.cliente,
      delivery: fetchedData.delivery,
      horaPedido: fetchedData.horaPedido,
      idPedido: fetchedData.idPedido,
      meioPagamento: fetchedData.meioPagamento,
      status: fetchedData.status,
      valor: fetchedData.valor
    })
  });
  return data
}


module.exports = { initializeFirebaseApp, getFirebaseApp, uploadData, fetchAllData }