const express = require('express')
const app = express()
const mongoose = require('mongoose')
const StudentRoutes = require('./routes/student')
const cors = require('cors')


// middleware
app.use(cors())
app.use(express.json())



app.use("/api/students",StudentRoutes)


// Database Connecting
mongoose.connect('mongodb+srv://086local:Anas1234@dywstudio.qquto4a.mongodb.net/react?retryWrites=true&w=majority').then(()=>{console.log("Connected!")}).catch(()=>{console.log("Not Connected!")})


app.listen(4600,()=>{
    console.log("Server is Running on Port 4600...")
})