const express = require('express')
const app = express()

app.use(express.json())


app.get('/',(req,res)=>{
    console.log(req)
    res.send("Hi")
})



app.post('/:id',(req,res)=>{

    var ary = [1,2,3,4,5,6]


    if(ary.includes(Number(req.params.id))){

        res.send(`Dynamic Route ${req.params.id}`)
    }else{
        
        res.status(404).send("Page Not Found")
    }

})






app.listen(4600,()=>{
    console.log("Server is Running on Port 4600...")
})