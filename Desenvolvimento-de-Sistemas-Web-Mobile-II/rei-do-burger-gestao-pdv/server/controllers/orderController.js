const {
    fetchAllOrders,
    fetchSpecificOrder
} = require("../models/orderModel")

module.exports = {
    getAllOrders: async (req, res) => {
        const orders = await fetchAllOrders()
        res.send(orders)
    },

    getSpecificOrder: async (req, res) => {
        const orderId = req.params.id
        const order = await fetchSpecificOrder(orderId)
        res.send(order)
    },

    post: (req, res) => {
        
    }
}