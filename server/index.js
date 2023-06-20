const express = require('express')
const app = express()
const mongoose = require('mongoose')
const StudentRoutes = require('./routes/student')


// middleware
app.use(express.json())
app.use("/api/students",StudentRoutes)


// Database Connecting
mongoose.connect('mongodb://127.0.0.1:27017/react').then(()=>{console.log("Connected!")}).catch(()=>{console.log("Not Connected!")})


app.listen(4600,()=>{
    console.log("Server is Running on Port 4600...")
})