const express=require('express')
const route=express();
const homeController=require('../controller/home');
const phoneController=require('../controller/phone')
const padController=require('../controller/pad')
const lapController=require('../controller/laptop');
const accessController=require('../controller/accesories')
route.get("/home",homeController.home);
route.get("/homecaro",homeController.homecaro);
route.get("/phone",phoneController.phone);
route.get("/phonecarosal",phoneController.carosalPhone);
route.get("/pad",padController.pad)
route.get("/padcarosal",padController.caroPad)
route.get("/laptop",lapController.laptop)
route.get("/lapcaro",lapController.lapcaro)
route.get("/accessories",accessController.access)
route.get("/acccaro",accessController.caro)

module.exports=route;