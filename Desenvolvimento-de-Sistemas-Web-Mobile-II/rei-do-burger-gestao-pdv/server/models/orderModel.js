const firebaseUtils = require("../config/firebase")

// Pegar os Pedidos do Firestore
const fetchAllOrders = () => {
    const data = firebaseUtils.fetchAllData()
    return data
}

// Pegar um Pedido Específico do Firestore
const fetchSpecificOrder = (orderId) => {
    const data = firebaseUtils.fetchData(orderId)
    return data
}

module.exports = { fetchAllOrders, fetchSpecificOrder }