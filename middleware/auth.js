const jwt=require('jsonwebtoken')

const checkauth=async (req,res,next)=>{
    //console.log('hell rule')
    
    const token = req.cookies.token;
    console.log(token)
    if(!token)return res.status(401).json({
        message:"Unauthorized"
    });
    try{
        const decoded = jwt.verify(token,"Annu@try");
        console.log(decoded)

        //fetch full user from DB
        const user = await UserModel.findById(decoded.ID);
        if(!user)
            return res.status(401).json({
        message:"User not found :{ "});
        req.user = user;
        next();
    }
    catch(err){
        res.status(401).json({
            message:"Invalid user !!"
        })
    }

    
}



module.exports=checkauth






