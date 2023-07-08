import { NextResponse } from "next/server";
import { dbConnect } from "../../../config/dbConnect";
import UserModel from '../../../models/user'

dbConnect()


// to get data of user
export async function GET(req){

    const users = await UserModel.find()

    return(
        NextResponse.json(users)
    )
}

// to save data in DB
export async function POST(req){

    const body = await req.json()

    const savedUser = await UserModel.create(body)

    return(
        NextResponse.json({
            success:true,
            message:savedUser
        })
    )
}


// to delete data in DB
export async function DELETE(req){

    const body = await req.json()
    
    await UserModel.findByIdAndDelete(body.id)


    return(
        NextResponse.json({message:"User Deleted!"})
    )
}


// to update data in DB
export async function PUT(req){

    const body = await req.json()
    
    var updatedUser = await UserModel.findByIdAndUpdate(body.id,{$set:body},{new:true})

    return(
        NextResponse.json({
            success:true,
            message:updatedUser
        })
    )
}