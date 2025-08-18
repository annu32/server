const mongoose=require("mongoose")


const contactSchema =new mongoose.Schema({
    name:{
        type:String
    }
})

const contactmodal=mongoose.model('contact',contactSchema)
module.exports=contactmodal