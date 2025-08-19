const UserModel=require('../models/user');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');


class UserController{

    static register=async(req,res)=>{
        try{
            //console.log(req.body)
            const {name,email,password}=req.body
            const existingUser=await UserModel.findOne({email});
            if(existingUser){
                return res.status(400).json({msg:"User already exists"});
            }

            const hashedPassword=await bcrypt.hash(password,10);

            const data=await UserModel.create({
                name,
                email,
                password:hashedPassword
            })
            res.json({
                data,
                msg:"user insert success"
            })
        }catch(error){
            console.log(error)
        }
    }
    static login=async(req,res)=>{
        try{
            //console.log(req.body)
            const{email,password}=req.body

            const user=await UserModel.findOne({email})
            if(!user){
                return res.status(400).json({message:"invalid credential"})
            }

            const ismatch=await bcrypt.compare(password,user.password)
            if(!ismatch){
                returnres.status(400).json({message:"invalid credential"})
            }

            //token create
            const token= jwt.sign({ID:user.id},process.env.JWT_SECRET,{expiresIn:'2d'})   //token will expire in 2 days
            //console.log(token)

            //send token in http-only cookies
            res.cookie("token",token,{
                httpOnly:true,
            })

            res
                .status(200)
                .json({
                    message:"login successfully",
                    role:user.role,
                    name:user.name,
                    email:user.email,
                })

        }catch(error){
            console.log(error)
        }
    }
    static profile=async(req,res)=>{
        try{
            console.log("hell ")
        }
        catch(error){
            console.log(error)
        }
    }
    static logout= async(req,res)=>{
        try{
            res.clearCookie('token')
            res.status(200).json({message:'logout suck'})
        }
        catch(error){
            console.log(error)
        }
    }
}
module.exports=UserController