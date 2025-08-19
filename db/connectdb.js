const mongoose=require("mongoose")
const LIVE_URL="mongodb+srv://bhadoriyaanurag88:Anurag32@cluster0.ityj6az.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectdb=()=>{
    return mongoose.connect(process.env.LIVE_URL)

    .then(()=>{
        console.log("connected successfully")
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports=connectdb