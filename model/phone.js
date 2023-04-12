const mongoose=require('mongoose');

const phoneStructure=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    mobile:Number
})

const phoneModal=mongoose.model("phone",phoneStructure)
module.exports=phoneModal;