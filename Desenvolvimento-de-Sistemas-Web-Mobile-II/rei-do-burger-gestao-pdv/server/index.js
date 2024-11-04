const express = require("express")
const cors = require("cors")
const app = express()
const firebaseFunctions = require('./firebase')

app.use(express.json())
app.use(cors())
firebaseFunctions.initializeFirebaseApp()

app.post("/create", async (req, res) => {
    const data = req.body
    await firebaseFunctions.uploadData()
    res.send({message: "User Added"})
})

app.listen(4000, () => console.log('The server has start at port 4000'))