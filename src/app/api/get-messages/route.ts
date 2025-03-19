import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import UserModel from "@/model/User";
import mongoose from "mongoose";
import dbConnect from "@/lib/dbConnect";


export async function GET(){
    await dbConnect();

    const session =await getServerSession(authOptions);
    const user = session?.user;

    if(!session || !user){
        return Response.json({
            success:false,
            message:'Not Authentication'
        },{
            status:401
        })
    }

    const userId = new mongoose.Types.ObjectId(user._id);
    try {
        const user =await UserModel.aggregate(
            [
                {$match:{_id:userId}},
                {$unwind:'$messages'},
                {$sort:{'messages.createdAt':-1}},
                {$group:{_id:'$_id',messages:{$push:'$messages'}}}
            ]
        )
        if(!user || user.length){
            return Response.json({
                success:false,
                message:'User not found'
            },{status:401})
        }

        return Response.json({
            success:true,
            message:user[0]?.message
        },{
            status:200
        })

    } catch (error) {
        console.error('Error to get message',error);
        return Response.json({
            success:false,
            message:'Error to get message'
        },{status:500})
    }
}