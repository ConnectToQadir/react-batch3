const StudentModel = require('../models/student')
const router = require('express').Router()


// Create
router.post("/enroll", async (req, res) => {

    try {

        const newUser = await StudentModel.create(req.body)
        res.status(201).json(newUser)

    } catch (error) {
        
        res.status(500).json({
            success:false,
            message:"Something Went Wrong!"
        })

    }
})

// Read All
router.get("/",async (req,res)=>{
    try {
        const students = await StudentModel.find()
        res.json(students)
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something Went Wrong!"
        })
    }
})

// Read Single
router.get("/:id",async (req,res)=>{
    try {
        const User = await StudentModel.findById(req.params.id)
        res.json(User)
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something Went Wrong!"
        })
    }
})

// Update
router.put("/:id",async (req,res)=>{
    try {
        const updatedUser = await StudentModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.json(updatedUser)
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something Went Wrong!"
        })
    }
})


// Delete
router.delete("/:id",async (req,res)=>{
    try {
        await StudentModel.findByIdAndDelete(req.params.id)
        res.send("Deleted!")
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something Went Wrong!"
        })
    }
})






module.exports = router