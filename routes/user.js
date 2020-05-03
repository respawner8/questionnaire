const express=require('express');
const router = express.Router();
const mongoose=require('mongoose');
const userModel=require('../models/userModel.js')


// router.post('/', function(req,res){
//     console.log("yes");
//     const email=req.body.email;
//     userModel.findOne({
//         email:email
//     })
//     .then(user=>{
//             res.json(user)
//     })
//     .catch(function(req,res){
//         const newUser=new userModel({
//             _id: new mongoose.Types.ObjectId,
//             name:req.body.name,
//             email:req.body.email
//         })
//         newUser.save();
//         res.json({"message":"new user saved"});
//     })
// })

router.post('/',function(req,res){
    const newUser=new userModel({
        _id: new mongoose.Types.ObjectId,
        name:req.body.name,
        email:req.body.email
    })
    userModel.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>0)
            res.json({"message" : "1"})
        else{
            newUser.save();
            res.json({"message": "2"})
        }
    })
})



module.exports=router;