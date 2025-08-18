const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        default:String
    }
})


const Usermodal=mongoose.model('user',UserSchema)
module.exports=Usermodal