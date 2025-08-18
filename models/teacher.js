const mongoose=require("mongoose")

const teacherSchema=new mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type:String
    },
    contact:{
        type:String

    }
})
const teachermodal=mongoose.model("teacher",teacherSchema)
module.exports=teachermodal