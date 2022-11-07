const mongoose=require('mongoose')

const customerTable=new mongoose.Schema({
    customer_id:{
        type:String,
        required:true
    },
    customer_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
}) 
const CustomerData=new mongoose.model("Customer",customerTable)
module.exports=CustomerData