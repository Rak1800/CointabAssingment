const express= require("express")
const bodyParser= require("body-parser")
const route=require("./routes/route")
const mongoose =require("mongoose")
const axios =require ("axios")

const app =express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://Rak18000:Rakesh123@cluster0.xntrj.mongodb.net/Cointab ",{
    useNewUrlParser:true
})
.then(()=>console.log("mongoDb is connected"))
.catch(err=>console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 3000, function(){
   console.log("express is riunning on port " +(process.env.PORT || 3000))
})