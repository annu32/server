const express=require('express')
const app=express()
const port=8000
const web=require('./routes/web')
const connectdb=require('./db/connectdb')
const fileupload=require('express-fileupload')
const cookieparser=require('cookie-parser')
const cors=require('cors');

//token get cookie
app.use(cookieparser())

app.use(
    cors
    ({
    origin:"http://localhost:5173",    //my client domain
    credentials:true,
})
)


//image upload

app.use(fileupload({
    useTempFiles:true,
   // tempFileDir:'/temp/'
}))



// console.log(express)




//connect db
connectdb()
app.use(express.json())










app.use('/api',web)//localhost:8000/api/
app.listen(port,console.log('server start succesfully'))