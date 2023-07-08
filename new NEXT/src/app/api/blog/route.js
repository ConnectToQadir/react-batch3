import { NextResponse } from "next/server";

export async function POST(req){

    // To get Body
    const body = await req.json()


    // To get Queries manual method
    const query = {}
    const reqQueryAry = req.url.split("?")[1].split("&")
    reqQueryAry.forEach(v => {
        query[v.split("=")[0]] = v.split("=")[1]
    });

    console.log(query)

    // To get Queries 2nd method (builtin)
    // var url = new URL(req.url)
    // console.log(url.searchParams.get("class"))




    
        
    

    return NextResponse.json({
        name:"Usman"
    })
}
