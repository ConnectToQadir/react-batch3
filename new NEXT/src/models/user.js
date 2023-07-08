import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    age:Number
})

export default mongoose.models.user || mongoose.model("user",userSchema)