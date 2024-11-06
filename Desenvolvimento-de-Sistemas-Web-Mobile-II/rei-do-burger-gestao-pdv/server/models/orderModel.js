const firebaseUtils = require("../config/firebase")

// Pegar os Pedidos do Firestore
const fetchAllOrders = () => {
    const data = firebaseUtils.fetchAllData()
    return data
}

module.exports = { fetchAllOrders }