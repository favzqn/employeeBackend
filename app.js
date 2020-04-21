const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Employee')

const Employee = mongoose.model("employee")

const mongoUri = "mongodb+srv://cnq:53u2wBMu9iKBxDu4@cluster0-7b4g1.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongoUri, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected", ()=>{
    console.log("Connected to Mongo")
})

mongoose.connection.on("error", ()=>{
    console.log("Not Connected, Err")
})

app.get('/',(req,res)=>{
    res.send("Welcome to node js")
})
app.listen(3000, ()=>{
    console.log("Server running")
})