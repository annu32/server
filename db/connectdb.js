const mongoose=require("mongoose")
const live_url="mongodb+srv://bhadoriyaanurag88:Anurag32@cluster0.ityj6az.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectdb=()=>{
    return mongoose.connect('mongodb://127.0.0.1:27017/coursebooking')

    .then(()=>{
        console.log("connected successfully")
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports=connectdb