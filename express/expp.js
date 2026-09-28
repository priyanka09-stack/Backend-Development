const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017").then(()=>{"Sever Connected"}).catch((err)=>{console.log(err)})
app.listen(3000,() => {
    console.log("Server Running At Port 3000")
})
