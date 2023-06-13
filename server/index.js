const express = require('express')
const app = express()
const mongoose = require('mongoose')


// middleware
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Hi")
})


// Student Modal
const Students = mongoose.model('student', new mongoose.Schema({
    name:String,
    age:Number
}))





app.post('/enroll',async (req,res)=>{
    const student = await Students.create(req.body)
    res.status(201).json(student)
})


app.get("/getStudents",async(req,res)=>{
    const students = await Students.find()
    res.json(students)
})





// Database Connecting
mongoose.connect('mongodb://127.0.0.1:27017/react').then(()=>{console.log("Connected!")}).catch(()=>{console.log("Not Connected!")})


app.listen(4600,()=>{
    console.log("Server is Running on Port 4600...")
})