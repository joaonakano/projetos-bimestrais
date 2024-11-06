const {
    fetchAllOrders
} = require("../models/orderModel")

module.exports = {
    getAllOrders: async (req, res) => {
        const orders = await fetchAllOrders()
        res.send(orders)
    },

    post: (req, res) => {
        
    }
}