const mongo=require('mongoose')
const url="mongodb+srv://saravanan10722:saravanan10722@cluster0.3orgnpn.mongodb.net/e-commerce?retryWrites=true&w=majority"

const  connect=async()=>{
    try{
      await  mongo.connect(url)
      console.log("connected");


    }
    catch{
        console.log("error");

    }
}
module.exports=connect;