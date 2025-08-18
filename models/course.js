const mongoose=require("mongoose")

const courseSchema=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    Price:{
        type:Number

    },
    duration:{
        type:String
    },
    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }

})
const coursemodal=mongoose.model("course",courseSchema)
module.exports=coursemodal