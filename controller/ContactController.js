const contactmodal = require('../models/contact')

class ContactController {
    static display = async (req, res) => {
        try {
            const data = await contactmodal.find()
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    }
    static create = async (req, res) => {
        try {
            // console.log(req.body)
            const { name } = req.body
            const data = await contactmodal.create({
                name
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
            const data = await contactmodal.findById(id)
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    }
    static update = async (req, res) => {
        try {
            const id = req.params.id
            const { name } = req.body
            const data = await contactmodal.findByIdAndUpdate(id, {
                name
            })
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    }

    static delete = async (req, res) => {
        try {
            const id = req.params.id
      
            const data = await contactmodal.findByIdAndDelete(id)
            res.json({
                msg: "delete success"
            })
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = ContactController
