import mongoose, { Schema } from "mongoose";

const resetPasswordSchema = new mongoose.Schema({
    userId:{
        type:Schema.Types.ObjectId,
        require:true,
    },
    token:{type:String,require:true},
    createdAt:{type:Date,default:Date.now()}    
})

export default mongoose.model('ResetPassword',resetPasswordSchema)