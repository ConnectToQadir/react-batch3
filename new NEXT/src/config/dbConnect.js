import mongoose from "mongoose";


export function dbConnect(){

    if(mongoose.connection.readyState >= 1 ){
        return
    }

    mongoose.connect("mongodb://127.0.0.1:27017/burger")
}