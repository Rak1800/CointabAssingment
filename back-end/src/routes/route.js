const express= require("express")
const router=express.Router()
const axios= require('axios')
const {user}=require('../controllers/fetchcontroller')



 router.get("/user",user) 




module.exports= router