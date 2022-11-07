const express = require('express')
const router = express.Router()
const product_table =require('../models/ProductTable')
const CustomerData=require('../models/Customer')
router.post('/product',(req, res) => {
    product_table.create(
        {
            product_id: req.body.product_id,
            product_type:req.body.product_type,
            product_name:req.body.product_name,
            product_price:req.body.product_price,
            available_Quantity:req.body.available_Quantity
        }).then((data)=>{
                return res.json({data,message:"successfully update product"})
        }).catch((err)=>{
            console.log(err)
        })
})

router.post('/customer',(req,res)=>{
    CustomerData.find({email:email}).then((data)=>{
        if(!data){
            CustomerData.create(
                {
                    customer_id: req.body.customer_id,
                    customer_name:req.body.customer_name,
                    email:req.body.email,
                    balance:req.body.balance,
                }).then((data)=>{
                        return res.json({data,message:"successfully created Customer"})
                }).catch((err)=>{
                    console.log(err)
                })
        }

    })
   
})
router.get('/customer/customerID',(req,res)=>{
CustomerData.find({customer_id:req.body.customer_id}).then((data)=>{
        res.json({data,message:"customer Details"})
    })
})
router.get('/product/productID',(req,res)=>{
    product_table.find({product_id:req.body.product_id}).then((data)=>{
        res.json({data,message:"customer Details"})
    })
})
router.get('/product/productType',(req,res)=>{
    product_table.find({product_type:req.body.product_type}).then((data)=>{
        res.json({data,message:"customer Details"})
    })
})
module.exports = router