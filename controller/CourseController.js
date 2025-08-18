
const coursemodal = require('../models/course')
const cloudinary=require('cloudinary')



    // Configuration
    cloudinary.config({ 
        cloud_name: 'dk6eq6gve', 
        api_key: '126643424231966', 
        api_secret: '9AywN3f4TQA_NEggM1_v8YjUAnE' // Click 'View API Keys' above to copy your API secret
    });

class CourseController {
    static display = async (req, res) => {
        try {
            const data = await coursemodal.find()
            console.log(data)
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    }
    static create = async (req, res) => {
        try {
            //console.log(req.files)
            const { title,description,price,duration } = req.body
            const file=req.files.image
            //console.log(file)

            const imageupload=await cloudinary.uploader.upload(file.tempFilePath,{
                folder:'Anurag Full_test'
            }) 
            //console.log(imageupload)

             const data = await coursemodal.create({
                title,
                description,
                price,
                duration,
                image:{
                    public_id:imageupload.public_id,
                    url:imageupload.secure_url
                }
             })
            res.json(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    static view = async (req, res) => {
        try {
            const id = req.params.id
            console.log(id)
            const data = await coursemodal.findById(id)
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    }
    static update = async (req, res) => {
        try {
            const id = req.params.id
            const { title } = req.body
            const data = await coursemodal.findByIdAndUpdate(id, {
                title
            })
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    }

    static delete = async (req, res) => {
        try {
            const id = req.params.id
      
            const data = await coursemodal.findByIdAndDelete(id)
            res.json({
                msg: "delete success"
            })
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = CourseController
