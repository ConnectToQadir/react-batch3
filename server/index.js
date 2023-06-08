import express from "express";
const app = express()

app.get('/',(req,res)=>{
    res.json(req.query)
})





app.get('/apply-online',(req,res)=>{
    res.send(`
    <form action='/thanks' >
        <input type="text" required name="name" placeholder="Enter your Name" >
        <input type="number" required name="age" placeholder="Enter your Age" >
        <button>Send</button>
    </form>
    `)
})

app.get('/thanks',(req,res)=>{
    console.log(req.query)
    res.send(`<h1> ${req.query.name}, Thanks for Submission!</h1>`)
})

app.listen(4600,()=>{
    console.log("Server is Running on Port 4600...")
})

