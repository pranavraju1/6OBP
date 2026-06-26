import mongoose from "mongoose";

const connectDb = async() =>{
    try{
        mongoose.connection.on('connected',()=>console.log("DB connected"))
        await mongoose.connect(`${process.env.MONGO_URL}/quickblog`)
    }catch(err){
        console.log(err.message)
    }
}

export default connectDb;