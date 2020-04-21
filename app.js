const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const mongoUri = "mongodb+srv://cnq:53u2wBMu9iKBxDu4@cluster0-7b4g1.mongodb.net/test?retryWrites=true&w=majority"

app.get('/',(req,res)=>{
    res.send("Welcome to node js")
})
app.listen(3000, ()=>{
    console.log("Server running")
})