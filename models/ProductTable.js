const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    product_id:{
        type:String,
        required:true
    },
    product_type:{
        type:String,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:Number,
        required:true
    },
    available_Quantity:{
        type:Number,
        required:true
    }
})
const product_table= new mongoose.model('Products',productSchema)
module.exports=product_table