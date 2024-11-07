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
// Create
const uploadData = async (data) => {
  const dataToUpload = data
  const orderRef = db.collection("pedidos")
  const doc = await orderRef.doc().set(dataToUpload)
  return doc
}

// Read - All
const fetchAllData = async () => {
  const orderRef = db.collection("pedidos")
  const snapshot = await orderRef.get()
  let data = []

  snapshot.forEach(doc => {
    let fetchedData = doc.data() 
    data.push({
      idDocumento: doc.id,
      idPedido: fetchedData.idPedido,
      pedido: fetchedData.pedido,
      cliente: fetchedData.cliente,
      delivery: fetchedData.delivery,
      horaPedido: fetchedData.horaPedido,
      meioPagamento: fetchedData.meioPagamento,
      status: fetchedData.status,
      valor: fetchedData.valor
    })
  });
  return data
}

// Read - Selected
const fetchData = async (id) => {
  let data = []
  const orderRef = await db.collection("pedidos").doc(id).get().then(doc => {
    data.push(doc.data())
  })
  return data
}


module.exports = { initializeFirebaseApp, getFirebaseApp, uploadData, fetchAllData, fetchData }