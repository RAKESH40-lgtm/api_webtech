const express=require('express')
const mongoose=require('mongoose')
const app=express()
const PORT=3000
const router=require('./routes/router')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

mongoose.connect('mongodb://localhost:27017/api_web_tech_assignment',{
useNewUrlParser: true,
useUnifiedTopology: true
}).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log(err)
})

app.use(router)

app.listen(PORT,()=>{
    console.log(`server listen at ${PORT}`)
})