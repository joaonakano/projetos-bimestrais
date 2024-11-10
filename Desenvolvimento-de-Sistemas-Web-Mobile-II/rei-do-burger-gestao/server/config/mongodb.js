const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/rei-do-burger')

const orders = new mongoose.Schema({
    cliente: String,
    delivery: Boolean,
    meioPagamento: String,
    pedido: Array,
    status: String,
    valor: Number
})

const Order = mongoose.model('Orders', orders)

const order = new Order({
    cliente: "Rick Rolado",
    delivery: false,
    meioPagamento: "pix",
    pedido: ["X-Burger", "Hot-Dog", "Pepsi Cola"],
    status: "fazer",
    valor: 666.66
})

order.save()