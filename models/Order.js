const mongoose=require('mongoose')

const orderedData=new mongoose.Schema({
    customer_id:{
        type:String,
        required:true
    },
    product_id:{
        type:String,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderDetails=new mongoose.model('orderTable',orderedData)
module.exports=orderDetails